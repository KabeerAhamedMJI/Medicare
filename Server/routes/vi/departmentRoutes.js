import express from 'express';
import { createDepartment, deleteDepartment, getDepartmentList, getSingleDepartment, updateDepartment } from '../../controllers/departmentController.js';
import { adminProtect } from '../../middlewares/adminProtect.js';
import { upload } from '../../middlewares/uploadProtect.js';


const Router = express.Router();

Router.post('/newDepartment', adminProtect, upload.single("image"), createDepartment);
Router.get('/departmentList', getDepartmentList);
Router.get('/singleDepartment/:id', getSingleDepartment);
Router.put('/updateDepartment/:id', adminProtect, upload.single('file'), updateDepartment);
Router.delete('/deleteDepartment/:id', adminProtect, deleteDepartment);


export default Router;