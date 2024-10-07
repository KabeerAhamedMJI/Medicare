import { Offer } from '../models/offerModel.js';
import { cloudinaryInstance } from '../config/cloudinaryConfig.js';

export const createOffer = async (req, res, next) => {
    try {
        const { title, description, validFrom, validUntil, termsAndConditions } = req.body;

        const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path).catch((error) => { console.log(error) });

        if (!title || !description || !validFrom || !validUntil || !termsAndConditions) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const offerCount = await Offer.countDocuments();

        if (offerCount >= 2) {
            return res.status(400).json({ success: false, message: "Maximum 2 offers are allowed. Please delete an old offer to add a new one." });
        }

        const newOffer = await Offer.create({
            title,
            description,
            validFrom,
            validUntil,
            termsAndConditions,
            image: uploadResult.secure_url,
        });

        return res.status(201).json({ success: true, data: newOffer });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message || "Internal server error" });
    }
};


export const getOffersList = async (req, res, next) => {
    try {
        const availOffers = await Offer.find();

        if (!availOffers) {
            return res.status(400).json({ success: false, message: "Offers are not available" });
        }

        res.json({ success: true, message: "Offers List Fetched Successfully", data: availOffers });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message || "Internal server error" });
    }
};

export const getSingleOffer = async (req, res, next) => {

    try {
        const { id } = req.params;

        const offer = await Offer.findById(id);

        if (!offer) {
            return res.status(400).json({ success: false, message: "Offer not available" });
        }

        res.status(200).json({ success: true, message: "Offer fetched successfully", offer })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message || "Internal server error" });
    }
};

export const updateOffer = async (req, res, next) => {
    try {
        const { title, description, validFrom, validUntil, termsAndConditions, image } = req.body;

        const { id } = req.params;
        const updateData = { title, description, validFrom, validUntil, termsAndConditions, image };

        if (req.file) {
            const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path);
            updateData.image = uploadResult.secure_url;
        }
        const updatedOffer = await Offer.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedOffer) {
            return res.status(404).json({ success: false, message: "Offer not found" });
        }
        res.status(200).json({ success: true, message: "Offer data updated", data: updatedOffer });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message || "Internal server error" });
    }
};

export const deleteOffer = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteOffer = await Offer.findByIdAndDelete(id);
        if (!deleteOffer) {
            return res.status(400).json({ success: false, message: "Offer is not available" })
        };

        res.status(200).json({ success: true, message: "Offer deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message || "Internal server error" });
    }
};