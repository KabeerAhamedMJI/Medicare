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
        }
    }
)
export const Offer = mongoose.model("Offer", offerSchema)