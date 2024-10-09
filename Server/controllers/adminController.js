import bcrypt from 'bcrypt'
import { generateToken } from '../utis/generateToken.js';
import NodeCache from 'node-cache';
import crypto from 'crypto';
import { sendOtp } from '../utis/generateOTP.js';
import { Doctor } from '../models/doctorProfileModel.js';

const cache = new NodeCache({ stdTTL: 120 });

export const adminLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All feilds required" })
        }

        const adminExist = await Doctor.findOne({ email, role: 'admin' });
        if (!adminExist) {
            return res.status(400).json({ success: false, message: "Admin does not exist" })
        }

        const passwordMatch = bcrypt.compareSync(password, adminExist.password);
        if (!passwordMatch) {
            return res.status(400).json({ success: false, message: "Admin not authenticated" });
        }

        const otp = crypto.randomInt(1000, 9999).toString();
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

        const cachedAdmin = JSON.parse(cachedData);

        if (String(cachedAdmin.otp) !== String(otp)) {
            return res.status(400).json({ success: false, message: "Invalid OTP." });
        }

        if (new Date(cachedAdmin.otpExpiry) < Date.now()) {
            return res.status(400).json({ success: false, message: "OTP has expired." });
        }

        const token = generateToken(email, 'admin');
        res.cookie('token', token)

        cache.del(email);
        res.json({ success: true, message: "Login successful" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }

}

export const adminProfile = async (req, res, next) => {
    try {
        const { id } = req.params
        const adminData = await Doctor.findById({ _id: id, role: 'admin' }).select("-password");

        res.json({ success: true, message: "Admin Data Fetched..!", data: adminData });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
}

export const updateAdmin = async (req, res, next) => {
    try {
        const { doctorName, email, profilePic, password, specialization, contactNumber, department } = req.body;

        const { id } = req.params;

        const updateAdmin = { doctorName, email, profilePic, password, specialization, contactNumber, department }

        if (req.file) {
            const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path)
            updateAdmin.image = uploadResult.url
        }

        const updatedAdmin = await Doctor.findByIdAndUpdate(id, updateAdmin, { new: true });

        if (!updatedAdmin) {
            return res.status(404).json({ success: false, message: "Admin not found" });
        }

        res.json({ success: true, message: "Admin updated successfully", data: updatedAdmin });

    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const adminLogout = async (req, res, next) => {
    try {
        res.clearCookie("token");

        res.json({ success: true, message: "Admin logout successfully" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const checkAdmin = async (req, res, next) => {
    try {
        const admin = req.user;

        if (!admin) {
            return res.status(400).json({ success: true, message: "Admin not authenticated" });
        }
        res.json({ success: true, message: "Admin authenticated" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};