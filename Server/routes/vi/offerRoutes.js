import express from 'express';
import { createOffer, deleteOffer, getOffersList, getSingleOffer, updateOffer } from '../../controllers/offerController.js';
import { adminProtect } from '../../middlewares/adminProtect.js';

const Router = express.Router();


Router.post('/createOffer',adminProtect, createOffer);
Router.get("/offerlist", getOffersList);
Router.get("/singleOffer/:id", getSingleOffer);
Router.put('/updateOffer/:id', adminProtect, updateOffer);
Router.delete('/deleteOffer/:id', adminProtect, deleteOffer);


export default Router;