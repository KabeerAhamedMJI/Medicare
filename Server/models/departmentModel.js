import mongoose from 'mongoose'

const departmentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String
        },
        image: {
            type: String,
            default:
                "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
        },
        HOD: {
            type: mongoose.Types.ObjectId,
            ref: 'Doctor'
        },
        symptoms: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Symptom'
        }],
        doctors: [{ 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doctor'
        }]
    }

)

export const Department = mongoose.model("Department", departmentSchema)