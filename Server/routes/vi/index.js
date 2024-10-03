import express from 'express';
import appointmentRoutes from './appoinmtentRoutes.js';
import patientRoutes from './patientRoutes.js'
import doctorRoutes from './doctorRoutes.js'
import adminRoutes from './adminRoutes.js'
import departmentRoutes from './departmentRoutes.js'
import offerRoutes from './offerRoutes.js'
import symtomsRoutes from './symtomsRoutes.js'

const v1Router = express.Router();

v1Router.use('/doctor', doctorRoutes);
v1Router.use('/patient', patientRoutes);
v1Router.use('/admin', adminRoutes);
v1Router.use('/appointment', appointmentRoutes);
v1Router.use('/department', departmentRoutes);
v1Router.use('/offer',offerRoutes);
v1Router.use('/symtoms', symtomsRoutes);

export default v1Router;
