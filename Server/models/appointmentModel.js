import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema(
    {
        patient: {
            type: mongoose.Types.ObjectId,
            ref: 'Patient', 
        },
        doctor: {
            type: mongoose.Types.ObjectId,
            ref: 'Doctor',  
        },
        department: {
            type: mongoose.Types.ObjectId,
            ref: 'Department',
    
        },
        phoneNumber: {
            type: String
        },
        appointmentDate: {
            type: Date,
            required: true
        },
        description: {
            type: String
        },
        time: {
            type: String,
            required: true
        },
        
        status: {
            type: String,
            enum: ['Active', 'Cancelled', 'Completed'], default: 'Active'
        },
    }
)

export const Appointment = mongoose.model("Appointment", appointmentSchema)