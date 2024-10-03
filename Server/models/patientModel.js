import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        emailOrMobile: {
            type: String,
            required: true,
            unique: true,
        },
        profilePic: {
            type: String,
            default: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
        },
        phoneNumber: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            unique: true
        },
        gender:{
            type: String,
            default: "Other"
        },
        bloodGroup: {
            type: String,
            enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        },
        address: {
            type: String,
        },
        age: {
            type: String,
        },
        password: {
            type: String,
            required: true
        },
        otp: {
            type: String
        },
        otpExpiry: {
            type: Date
        }
    },
 
);

export const Patient = mongoose.model('Patient', patientSchema);
