import mongoose from 'mongoose'

const offerSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        validFrom: {
            type: Date,
            required: true
        },
        validUntil: {
            type: Date,
            required: true
        },
        termsAndConditions: {
            type: String,
            required: true
        },
        image: {
            type: String,
            default:
                "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
        }
    }
)
export const Offer = mongoose.model("Offer", offerSchema)