import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema(
    {
        doctorName: {
            type: String,
            required: true
        },
        profilePic: {
            type: String,
            default:
                "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        specialization: {
            type: String,
            required: true
        },
        contactNumber: {
            type: String,
            required: true
        },
        department: {
            type: mongoose.Types.ObjectId,
            ref: 'Department'
        },
        role: {
            type: String,
            enum: ['doctor', 'admin'],
        },
    }
)
export const Doctor = mongoose.model("Doctor", doctorSchema);