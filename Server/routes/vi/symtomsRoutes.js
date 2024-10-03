import express from 'express';
import { adminProtect } from '../../middlewares/adminProtect.js';
import { createSymtoms, deleteSymtom, getAllSymtoms, getSingleSymtom, updateSymtom } from '../../controllers/symtomsController.js';
import { upload } from '../../middlewares/uploadProtect.js';

const Router = express.Router();


Router.post('/createSymtoms',upload.single('image'), adminProtect, createSymtoms);
Router.get("/symtomslist", getAllSymtoms);
Router.get("/singleSymtom/:id", getSingleSymtom);
Router.put('/updateSymtom/:id', adminProtect, upload.single('file'), updateSymtom);
Router.delete('/deleteSymtom/:id', adminProtect, deleteSymtom);



export default Router;