import { cloudinaryInstance } from '../config/cloudinaryConfig.js';
import { Department } from '../models/departmentModel.js'
import mongoose from 'mongoose';


export const createDepartment = async (req, res, next) => {
    try {
        const { name, description, HOD, consultationFee } = req.body;

        const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path).catch((error) => { console.log(error) });
        console.log(uploadResult);

        if (!name || !description || !HOD || !consultationFee || !mongoose.Types.ObjectId.isValid(HOD)) {
            return res.status(400).json({ message: "Invalid HOD ID" });
        }

        const newDepartment = new Department({
            name,
            description,
            image: uploadResult.secure_url,
            consultationFee,
            HOD
        });

        await newDepartment.save();

        res.json({ success: true, message: "Department created successfully", data: newDepartment });

    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const getDepartmentList = async (req, res, next) => {
    try {
        const departments = await Department.find().populate('doctors');
        if (!departments) {
            return res.status(404).json({ success: false, message: 'Departments data could not fetch' });
        }

        res.json({ success: true, message: "Department List Fetched Successfully", data: departments })
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const getSingleDepartment = async (req, res, next) => {

    try {
        const { id } = req.params;

        const department = await Department.findById(id).populate({
            path: "HOD", select: "-password -email",
        });

        if (!department) {
            return res.status(404).json({ success: false, message: "Department is not fetched or not available" })
        };

        res.status(200).json({ success: true, message: "Department fetched successfully", department })
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};


export const updateDepartment = async (req, res, next) => {
    try {
        const { name, description, HOD, doctors, consultationFee} = req.body;
        const { id } = req.params;

        console.log('Update body:', { name, description, HOD, doctors, consultationFee});

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid department ID" });
        }

        const updateData = { name, description, HOD, doctors, consultationFee};

        if (req.file) {
            const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path);
            updateData.image = uploadResult.secure_url;
        }

        const updatedDepartment = await Department.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedDepartment) {
            return res.status(404).json({ success: false, message: "Department not found" });
        }

        res.status(200).json({ success: true, message: "Department data updated", data: updatedDepartment });

    } catch (error) {
        console.error('Error updating department:', error);
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};


export const deleteDepartment = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid department ID" });
        };

        const deletedDepartment = await Department.findByIdAndDelete(id);

        if (!deletedDepartment) {
            return res.status(404).json({ success: false, message: "Department not found" });
        }

        res.status(200).json({ success: true, message: "Department deleted successfully" });
    } catch (error) {
        console.error('Error deleting department:', error);
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};
