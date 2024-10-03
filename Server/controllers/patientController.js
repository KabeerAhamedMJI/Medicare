import bcrypt from 'bcrypt';
import { cloudinaryInstance } from '../config/cloudinaryConfig.js';
import { generateToken } from '../utis/generateToken.js';
import { Patient } from '../models/patientModel.js';
import NodeCache from 'node-cache';
import crypto from 'crypto';
import { sendOtp } from '../utis/generateOTP.js';

const cache = new NodeCache({ stdTTL: 120 });

export const patientCreate = async (req, res, next) => {
    try {
        const { fullName, emailOrMobile, password } = req.body;

        if (!fullName || !emailOrMobile || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const existingPatient = await Patient.findOne({ emailOrMobile });

        if (existingPatient) {
            return res.status(400).json({ message: "Email or mobile number is already registered." });
        }

        const salt = 10;
        const hashedPassword = bcrypt.hashSync(password, salt);

        const otp = crypto.randomInt(1000, 9999).toString();
        const otpExpiry = new Date(Date.now() + 3 * 60 * 1000);

        cache.set(emailOrMobile, JSON.stringify({ fullName, emailOrMobile, hashedPassword, otp, otpExpiry }));

        await sendOtp(emailOrMobile, otp);

        res.json({ success: true, message: "OTP sent for verification." });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
}

export const verifyOtpSignup = async (req, res, next) => {
    try {
        const { emailOrMobile, otp } = req.body;
        const cachedPatient = JSON.parse(await cache.get(emailOrMobile));

        if (!cachedPatient) {
            return res.status(400).json({ success: false, message: "OTP has expired or is invalid." });
        }

        if (String(cachedPatient.otp) !== String(otp)) {
            return res.status(400).json({ success: false, message: "Invalid OTP." });
        }

        if (new Date(cachedPatient.otpExpiry) < Date.now()) {
            return res.status(400).json({ success: false, message: "OTP has expired." });
        }

        const newPatient = new Patient({
            fullName: cachedPatient.fullName,
            emailOrMobile: cachedPatient.emailOrMobile,
            password: cachedPatient.hashedPassword,
        });
        await newPatient.save();

        // Clear cache after successful signup
        cache.del(emailOrMobile);

        const token = generateToken(cachedPatient.emailOrMobile, 'Patient');

        // Set cookie with options
        res.cookie('token', token, {
            httpOnly: true,
            secure: true, // Set to true if using HTTPS
            sameSite: 'None', // Required for cross-origin requests
        });

        res.json({ success: true, message: "Patient Created Successfully" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
}

export const patientLogin = async (req, res, next) => {
    try {
        const { emailOrMobile, password } = req.body;

        if (!emailOrMobile || !password) {
            return res.status(400).json({ success: false, message: "All fields required" });
        }

        const patientExist = await Patient.findOne({ emailOrMobile });

        if (!patientExist) {
            return res.status(400).json({ success: false, message: "User does not exist" });
        }

        const passwordMatch = bcrypt.compareSync(password, patientExist.password);
        if (!passwordMatch) {
            return res.status(400).json({ success: false, message: "User not authenticated: Incorrect Password" });
        }

        const otp = crypto.randomInt(1000, 9999).toString();
        const otpExpiry = new Date(Date.now() + 3 * 60 * 1000);

        cache.set(emailOrMobile, JSON.stringify({ emailOrMobile, otp, otpExpiry }));

        await sendOtp(emailOrMobile, otp);

        res.json({ success: true, message: "OTP sent for verification." });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
}

export const verifyOtpLogin = async (req, res) => {
    try {
        const { emailOrMobile, otp } = req.body;
        const cachedData = await cache.get(emailOrMobile);

        if (!cachedData) {
            return res.status(400).json({ success: false, message: "OTP has expired or is invalid." });
        }

        const cachedPatient = JSON.parse(cachedData);

        if (String(cachedPatient.otp) !== String(otp)) {
            return res.status(400).json({ success: false, message: "Invalid OTP." });
        }

        if (new Date(cachedPatient.otpExpiry) < Date.now()) {
            return res.status(400).json({ success: false, message: "OTP has expired." });
        }

        const token = generateToken(emailOrMobile, 'Patient');
        res.cookie('token', token, {
            httpOnly: true,
            secure: true, 
            sameSite: 'None',
        });

        cache.del(emailOrMobile);
        res.json({ success: true, message: "Login successful" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
}

export const patientProfile = async (req, res, next) => {
    try {
        const patient = req.user;

        const patientData = await Patient.findOne({ emailOrMobile: patient.email }).select("-password");

        if (!patientData) {
            return res.status(404).json({ success: false, message: "Patient data could not be fetched" });
        }

        res.json({ success: true, message: "Patient Data Fetched!", data: patientData });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
}

export const patientUpdate = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { fullName, phoneNumber, email, gender, bloodGroup, address, age } = req.body;

        const updateData = { fullName, phoneNumber, email, gender, bloodGroup, address, age };

        if (req.file) {
            const result = await cloudinaryInstance.uploader.upload(req.file.path);
            updateData.profilePic = result.secure_url;
        }

        const patientData = await Patient.findByIdAndUpdate(id, updateData, { new: true });

        if (!patientData) {
            return res.status(404).json({ success: false, message: "Patient data not found" });
        }

        if (patientData.profilePic) {
            const publicId = patientData.profilePic.split('/').pop().split('.')[0];
            try {
                await cloudinaryInstance.uploader.destroy(publicId);
                console.log("Image removed from Cloudinary");
            } catch (error) {
                console.error("Error removing image from Cloudinary:", error);
            }
        }

        res.json({ success: true, message: "Patient data updated successfully", data: patientData });
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const allPatientsList = async (req, res, next) => {
    try {
        const patients = await Patient.find();

        if (!patients) {
            return res.status(404).json({ success: false, message: 'Patients data could not be fetched' });
        }

        res.status(200).json({ success: true, message: 'Patients Data Fetched!', data: patients });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
};

export const patientLogout = async (req, res, next) => {
    try {
        res.clearCookie("token");
        res.json({ success: true, message: "Patient logged out successfully" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const checkPatient = async (req, res, next) => {
    try {
        const patient = req.user;

        if (!patient) {
            return res.status(400).json({ success: false, message: "Patient not available" });
        }
        res.json({ success: true, message: "Patient Authenticated" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};
