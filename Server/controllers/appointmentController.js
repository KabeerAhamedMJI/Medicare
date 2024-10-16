import { Appointment } from '../models/appointmentModel.js'


export const bookAppointment = async (req, res, next) => {
    try {
        const { appointmentDate, time, patientId, doctorId, departmentId, description, phoneNumber } = req.body;

        if (!appointmentDate || !time) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const existingAppointment = await Appointment.findOne({
            appointmentDate,
            time,
            doctor: doctorId,
            patient: patientId,
            department: departmentId
        });

        if (existingAppointment) {
            return res.status(409).json({ success: false, message: "Slot is not available for booking" });
        }

        const newAppointment = new Appointment({
            patient: patientId,
            department: departmentId,
            doctor: doctorId || null,
            phoneNumber,
            appointmentDate,
            time,
            description,
            status: "Active",
        });

        await newAppointment.save();

        return res.json({
            success: true,
            message: "Appointment booked successfully",
            data: newAppointment
        });

    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};


export const getAppointmentList = async (req, res) => {
    try {
        const appointments = await Appointment.find().populate('patient').populate('doctor').populate('department').exec();

        if (!appointments) {
            return res.status(404).json({ success: false, message: 'Appointments data could not fetch' });
        }
        res.json({ success: true, message: "Appointment List Fetched Successfully", data: appointments })
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const getSingleAppointment = async (req, res, next) => {
    const { id } = req.params;

    const appointment = await Appointment.findById(id).populate({
        path: "doctor", select: "-password -email",
    });

    if (!appointment) {
        return res.status(404).json({ success: false, message: "Appointment is not valid" })
    }

    res.status(200).json({ success: true, message: "Appointment fetched successfully", appointment })
};

export const updateAppointmentStatus = async (req, res, next) => {
    try {
        const { appointmentId, status } = req.body;

        if (!id || !status) {
            return res.status(400).json({ success: false, message: "Appointment ID and status are required" });
        }

        const validStatuses = ["Active", "Cancelled", "Completed"];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ success: false, message: "Invalid status value" });
        }

        const updatedAppointment = await Appointment.findByIdAndUpdate(appointmentId, { status }, { new: true });

        if (!updatedAppointment) {
            return res.status(404).json({ success: false, message: "Appointment not found" });
        }

        res.json({ success: true, message: "Appointment status updated successfully", data: updatedAppointment });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const getOnePatientAppointments = async (req, res, next) => {

    const patientId = req.params.patientId;

    try {
        const appointments = await Appointment.find({ patient: patientId }).populate('doctor').populate('patient').populate('department');

        console.log(appointments);
        if (!appointments) {
            return res.status(404).json({ success: false, message: "Appointments not found" });
        }
        res.json({ success: true, message: "Appointments fetched successfully", data: appointments });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};


export const deleteAppointment = async (req, res, next) => {

    try {
        const { id } = req.params;

        const deleteAppointment = await Appointment.findByIdAndDelete(id);

        if (!deleteAppointment) {
            return res.status(404).json({ success: false, message: "Appointment not found" })
        }

        res.status(200).json({ success: true, message: "Appointment deleted successfully" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};