import {Symtom} from '../models/symtomsModel.js'
import { cloudinaryInstance } from '../config/cloudinaryConfig.js';
import { Department } from '../models/departmentModel.js';
import mongoose from 'mongoose';

export const createSymtoms = async (req, res, next) => {
    try {
        
        const { title, description, cost, department} = req.body;

        const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path).catch((error) => { console.log(error) });
        console.log(uploadResult);

        if (!title || !description || !cost || !department || !mongoose.Types.ObjectId.isValid(department)) {
            return res.status(400).json({ message: "Invalid department ID" });
        }

        const newSymtom = new Symtom({
            title,
            description,
            image: uploadResult.secure_url,
            cost,
            department,
        });

        await newSymtom.save();

        const departmentObj = await Department.findById(department);
        if (departmentObj) {
            departmentObj.symptoms.push(newSymtom._id);
            await departmentObj.save();
        }

        res.json({ success: true, message: "Symtom created successfully", data: newSymtom });

    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
};

export const getAllSymtoms = async (req, res, next) => {
    try {
        const symtoms = await Symtom.find();

        if (!symtoms) {
            return res.status(404).json({ success: false, message: 'Symtoms data could not fetch' });
        }

        res.status(200).json({ success: true, message: 'Symtoms data Fetched!', data: symtoms });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });  
    }
};

export const getSingleSymtom = async (req, res, next) => {

    try {
        const { id } = req.params;

        const symtom = await Symtom.findById(id).populate({
            path: "department"
        });

        if (!symtom) {
            return res.status(404).json({ success: false, message: "Symtom is not fetched or not available" })
        };

        res.status(200).json({ success: true, message: "Symtom fetched successfully", symtom })
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const updateSymtom = async (req, res, next) => {
  
    try {
        const { title, description, cost, department } = req.body;
        const { id } = req.params;

        console.log('Update body:', { title, description, cost, department });

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Symtom ID" });
        }

        const updateData = { title, description, cost, department };

        if (req.file) {
            const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path);
            updateData.image = uploadResult.secure_url;
        }

        const updatedSymtom = await Symtom.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedSymtom) {
            return res.status(404).json({ success: false, message: "Symtom not found" });
        }

        res.status(200).json({ success: true, message: "Symtom data updated", data: updatedSymtom });

    } catch (error) {
        console.error('Error updating Symtom:', error);
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }

};

export const deleteSymtom = async (req, res) => {
    try {
        const symtom = req.user;

        if (!symtom) {
            return res.status(400).json({ success: false, message: "Symtom is not available" });
        }
        res.json({ success: true, message: "Symtom deleted sucessfully" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
}