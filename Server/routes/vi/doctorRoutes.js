import express from 'express';
import { allDoctorsList, checkDoctor, deleteDoctor, doctorCreate, doctorLogout, doctorProfile, doctroLogin, verifyOtpLogin, verifyOtpSignup } from '../../controllers/doctorController.js';
import { upload } from '../../middlewares/uploadProtect.js';
import { doctorProtect } from '../../middlewares/doctorProtect.js';
import { adminProtect } from '../../middlewares/adminProtect.js';

const Router = express.Router();

Router.post('/create', upload.single('profilePic'), doctorCreate);
Router.post('/signUpOtp', verifyOtpSignup);
Router.post('/login', doctroLogin);
Router.post('/loginOtp', verifyOtpLogin);
Router.post("/logout", doctorLogout);

Router.get('/profile/:id', doctorProfile);
Router.get('/doctorlist', allDoctorsList);
Router.get('/check-doctor', doctorProtect, checkDoctor);
Router.delete('/deleteDoctor/:id',adminProtect, deleteDoctor);




export default Router;