import express from 'express';
import { bookAppointment, deleteAppointment, getAppointmentList, getOnePatientAppointments, getSingleAppointment, updateAppointmentStatus} from '../../controllers/appointmentController.js';
import { patientProtect } from '../../middlewares/patientProtect.js';
import { adminProtect } from '../../middlewares/adminProtect.js';
import { doctorProtect } from '../../middlewares/doctorProtect.js';

const Router = express.Router();

Router.post('/bookAppointment',patientProtect, bookAppointment);
Router.get("/singleAppointment/:id", patientProtect, getSingleAppointment );
Router.get("/appointmentlist",doctorProtect, getAppointmentList);
Router.get('/appointments/:patientId',patientProtect, getOnePatientAppointments);
Router.put('/updateAppointment/:id', adminProtect, updateAppointmentStatus);
Router.delete('/deleteAppointment/:id', adminProtect, deleteAppointment);


export default Router;