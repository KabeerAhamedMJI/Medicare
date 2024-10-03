import express from 'express';
import { allPatientsList, checkPatient, patientCreate, patientLogin, patientLogout, patientProfile,  patientUpdate,  verifyOtpLogin, verifyOtpSignup } from '../../controllers/patientController.js';
import { patientProtect } from '../../middlewares/patientProtect.js';
import { upload } from '../../middlewares/uploadProtect.js';
import { doctorProtect } from '../../middlewares/doctorProtect.js';

const Router = express.Router();

Router.post('/create', patientCreate);
Router.post('/signUpOtp', verifyOtpSignup);
Router.post('/login', patientLogin);
Router.post('/loginOtp', verifyOtpLogin);
Router.post("/logout",  patientLogout);

Router.get('/profile', patientProtect, patientProfile);
Router.get('/patientlist', doctorProtect, allPatientsList)
Router.get('/check-Patient', patientProtect, checkPatient);

Router.put('/update/:id',patientProtect, upload.single('profilePic'), patientUpdate );



export default Router;