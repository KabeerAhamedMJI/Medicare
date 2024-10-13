import { cloudinaryInstance } from '../config/cloudinaryConfig.js';
import { Doctor } from '../models/doctorProfileModel.js'
import bcrypt from 'bcrypt'
import { generateToken } from '../utis/generateToken.js';
import NodeCache from 'node-cache';
import crypto from 'crypto';
import { sendOtp } from '../utis/generateOTP.js';

const cache = new NodeCache({ stdTTL: 120 });

export const doctorCreate = async (req, res, next) => {
    try {
        const { doctorName, email, profilePic, password, specialization, contactNumber, department } = req.body;

        const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path).catch((error) => {console.log(error)});

        console.log(uploadResult);


        if (!doctorName || !email || !password || !specialization || !contactNumber ) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const existingDoctor = await Doctor.findOne({ email });

        if (existingDoctor) {
            return res.status(400).json({ message: "Doctor is already registered." });
        }

        const salt = 10;
        const hashedPassword = bcrypt.hashSync(password, salt);


        const otp = crypto.randomInt(100000, 999999).toString();
        const otpExpiry = new Date(Date.now() + 3 * 60 * 1000);

        cache.set(email, JSON.stringify({ doctorName, profilePic, email, hashedPassword, specialization, contactNumber, department, role: "doctor", otp, otpExpiry }));

        await sendOtp(email, otp);

        res.json({ success: true, message: "OTP sent for verification." });


    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
}



export const verifyOtpSignup = async (req, res) => {

    try {
        const { email, otp } = req.body;
        const cachedDoctor = JSON.parse(await cache.get(email));

        if (!cachedDoctor) {
            return res.status(400).json({ success: false, message: "OTP has expired or is invalid." });
        }

        if (cachedDoctor.otp !== otp) {
            return res.status(400).json({ success: false, message: "Invalid OTP." });
        }

        if (new Date(cachedDoctor.otpExpiry) < Date.now()) {
            return res.status(400).json({ success: false, message: "OTP has expired." });
        }
       
        const newDoctor = new Doctor({
            doctorName: cachedDoctor.doctorName,
            profilePic: cachedDoctor.profilePic,
            email: cachedDoctor.email,
            password: cachedDoctor.hashedPassword,
            specialization: cachedDoctor.specialization,
            contactNumber: cachedDoctor.contactNumber,
            role: cachedDoctor.role
        });
        await newDoctor.save()

        cache.del(email);

        const token = generateToken(email, 'Doctor');
        res.cookie('token', token);
        res.json({ success: true, message: "Doctor Created Successfully" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
}


export const doctroLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All feilds required" })
        }

        const doctorExist = await Doctor.findOne({ email });

        if (!doctorExist) {
            return res.status(400).json({ success: false, message: "doctor does not exist" })
        }

        const passwordMatch = bcrypt.compareSync(password, doctorExist.password);
        if (!passwordMatch) {
            return res.status(400).json({ success: false, message: "doctor not authenticated" });
        }

        const otp = crypto.randomInt(100000, 999999).toString();
        const otpExpiry = new Date(Date.now() + 3 * 60 * 1000);

        cache.set(email, JSON.stringify({ email, password, otp, otpExpiry }));

        await sendOtp(email, otp);

        res.json({ success: true, message: "OTP sent for verification." });

    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }

}


export const verifyOtpLogin = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const cachedData = await cache.get(email);

        if (!cachedData) {
            return res.status(400).json({ success: false, message: "OTP has expired or is invalid." });
        }

        const cachedDoctor = JSON.parse(cachedData);

        if (!cachedDoctor.otp == otp) {
            return res.status(400).json({ success: false, message: "Invalid OTP." });
        }

        if (new Date(cachedDoctor.otpExpiry) < Date.now()) {
            return res.status(400).json({ success: false, message: "OTP has expired." });
        }

        const token = generateToken(email, 'doctor');
        res.cookie('token', token)

        cache.del(email);
        res.json({ success: true, message: "Login successful" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }

}

export const doctorProfile = async (req, res, next) => {
    try {
        const { id } = req.params
        const doctorData = await Doctor.findById(id).select("-password");

        res.json({ success: true, message: "Doctor Data Fetched..!", data: doctorData });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const allDoctorsList = async (req, res, next) => {
    try {
        const doctors = await Doctor.find({ role: 'doctor' });

        if (!doctors) {
            return res.status(404).json({ success: false, message: 'Doctors data could not fetch' });
        }

        res.status(200).json({ success: true, message: 'Doctors Data Fetched!', data: doctors });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
};

export const doctorLogout = async (req, res, next) => {
    try {
        res.clearCookie("token");

        res.json({ success: true, message: "Doctor logout successfully" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const deleteDoctor = async (req, res, next) => {
    try {
        const { id } = req.params; 

        const doctor = await Doctor.findById(id);

        if (!doctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }

        if (doctor.profilePic) {

            const publicId = doctor.profilePic.split('/').pop().split('.')[0];

            await cloudinaryInstance.uploader.destroy(publicId, (error, result) => {
                if (error) {
                    console.error("Error removing image from Cloudinary:", error);
                } else {
                    console.log("Image removed from Cloudinary:", result);
                }
            });
        }

        await Doctor.findByIdAndDelete(id);

        res.json({ success: true, message: "Doctor deleted successfully" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const checkDoctor = async (req, res, next) => {
    try {
        const doctor = req.user;

        if (!doctor) {
            return res.status(400).json({ success: true, message: "Doctor not authenticated" });
        }
        res.json({ success: true, message: "Doctor authenticated" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};
