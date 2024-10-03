import express from 'express';
import { adminLogin, adminLogout, adminProfile, checkAdmin, updateAdmin, verifyOtpLogin } from '../../controllers/adminController.js';
import { adminProtect } from '../../middlewares/adminProtect.js';


const Router = express.Router();

Router.post('/login', adminLogin);
Router.post('/loginOtp', verifyOtpLogin);
Router.get('/profile/:id',adminProtect, adminProfile);
Router.post("/logout",  adminLogout);

Router.put('/updateAdmin/:id',adminProtect, updateAdmin);
Router.get('/check-admin', adminProtect, checkAdmin);



export default Router;