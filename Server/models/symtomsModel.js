import mongoose from 'mongoose'

const symtomSchema = new mongoose.Schema(
    {
        title: {
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
        cost: {
            type: Number,
            required: true,
        },
        department: {
            type: mongoose.Types.ObjectId,
            ref: 'Department'
        }
    }
)
export const Symtom = mongoose.model("Symtom", symtomSchema)