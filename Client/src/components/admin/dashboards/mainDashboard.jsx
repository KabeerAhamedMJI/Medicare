import React, { useEffect, useState } from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { BsBuildingFillAdd } from "react-icons/bs";
import { getAllAppointments } from '../../../services/appointmentApti';
import { getAllPatients } from '../../../services/patientApi';
import { getDoctorsList } from '../../../services/doctorApi';
import { departmentList } from '../../../services/doctorApi';
import { PieChart, Pie, Tooltip, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const MainDashboard = () => {

   const [department, setDepartment] = useState([]);
   const [patients, setPatients] = useState([]);
   const [appointments, setAppointments] = useState([]);
   const [doctors, setDoctors] = useState([]);
   const [departmentAppointments, setDepartmentAppointments] = useState([]);
   const [departmentDoctorsData, setDepartmentDoctorsData] = useState([]);


   const allAppointments = async () => {
      const response = await getAllAppointments();
      setAppointments(response.data);
      getDepartmentWiseAppointment(response.data);
   }

   const allPatients = async () => {
      const response = await getAllPatients();
      setPatients(response.data);
   }

   const allDoctors = async () => {
      const response = await getDoctorsList();
      setDoctors(response.data)
   }

   const allDepartments = async () => {
      const response = await departmentList();
      setDepartment(response.data);
      getDoctorsByDepartment(response.data);
   }

   const getDepartmentWiseAppointment = (appointments) => {
      const departmentMap = department.reduce((acc, dept) => {
         acc[dept._id] = dept.name;
         return acc;
      }, {});


      const departmentCount = appointments.reduce((acc, appointment) => {
         const { department: deptId } = appointment;
         const deptName = departmentMap[deptId];

         if (deptName) {
            if (acc[deptName]) {
               acc[deptName]++;
            } else {
               acc[deptName] = 1;
            }
         }
         return acc;
      }, {});

      const departmentData = Object.keys(departmentCount).map(departmentName => ({
         name: departmentName,
         value: departmentCount[departmentName]
      }));
      setDepartmentAppointments(departmentData);
   };

   const getDoctorsByDepartment = (departments) => {
      const departmentDoctors = departments.map(department => {
         console.log('Department:', department);

         return {
            name: department.name,
            Doctors: department.doctors.length
         };
      });

      console.log('Department Doctors:', departmentDoctors);
      setDepartmentDoctorsData(departmentDoctors);
   };


   useEffect(() => {
      allAppointments();
      allPatients();
      allDoctors();
      allDepartments();

   }, []);

   return (
      <div>
         <h1 className='md:mt-2 text-4xl font-bold text-[#223C6F]'>Medicare <span className='text-[#FFB74D]'>Dashboard</span></h1>
         <div>
            <div className='pt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
               <div className='relative w-full bg-[#FFB74D] rounded-xl p-4 flex flex-col items-start'>
                  <div className='flex flex-row items-center justify-center'>
                     <RiPagesLine className="mr-2 text-white p-1 icon-shadow" style={{ fontSize: '40px' }} />
                     <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center text-shadow-lg'>Appointments</h3>
                  </div>
                  <h2 className='text-4xl text-[#223c6f] font-bold ml-12 text-shadow-lg'>{appointments.length}</h2>
               </div>
               <div className='relative w-full bg-[#FFB74D] rounded-xl p-4 flex flex-col items-start'>
                  <div className='flex flex-row items-center justify-center'>
                     <FaUser className="mr-2 text-white p-1 icon-shadow" style={{ fontSize: '40px' }} />
                     <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center text-shadow-lg'>Patients</h3>
                  </div>
                  <div className='flex flex-row items-center gap-2 text-[#223c6f]'>
                     <h2 className='text-4xl text-[#223c6f] font-bold ml-12 text-shadow-lg'>{patients.length}</h2>
                     <span className='text-base items-center justify-center text-shadow-lg'>Registered</span>
                  </div>
               </div>
               <div className='relative w-full bg-[#FFB74D] rounded-xl p-4 flex flex-col items-start'>
                  <div className='flex flex-row items-center justify-center'>
                     <FaUserDoctor className="mr-2 text-white p-1 icon-shadow" style={{ fontSize: '40px' }} />
                     <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center text-shadow-lg'>Doctors</h3>
                  </div>
                  <div className='flex flex-row items-center gap-2 text-[#223c6f]'>
                     <h2 className='text-4xl text-[#223c6f] font-bold ml-12 text-shadow-lg'>{doctors.length}</h2>
                     <span className='text-base items-center justify-center text-shadow-lg'>Active Doctors </span>
                  </div>
               </div>
               <div className='relative w-full bg-[#FFB74D] rounded-xl p-4 flex flex-col items-start'>
                  <div className='flex flex-row items-center justify-center'>
                     <BsBuildingFillAdd className="mr-2 text-white p-1 icon-shadow" style={{ fontSize: '40px' }} />
                     <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center text-shadow-lg'>Departments</h3>
                  </div>
                  <div className='flex flex-row items-center gap-2 text-[#223c6f]'>
                     <h2 className='text-4xl text-[#223c6f] font-bold ml-12 text-shadow-lg'>{department.length}</h2>
                     <span className='text-base items-center justify-center text-shadow-lg'>Specialities</span>

                  </div>
               </div>
            </div>
         </div>
         <div className='flex flex-col md:flex-row items-center justify-center mt-6 p-4 gap-12'>
            <div className=' bg-gray-200 rounded-lg p-3'>
               <h2 className='text-lg font-bold  md:text-xl p-2 text-[#223C6F] text-shadow-lg text-[#223C6F]'>Department-wise Appointments</h2>
               <PieChart width={520} height={300}>
                  <Pie
                     dataKey="value"
                     isAnimationActive={false}
                     data={departmentAppointments}
                     cx="50%"
                     cy="50%"
                     outerRadius={110}
                     fill="#223C6F"
                     label
                  />
                  <Tooltip />
               </PieChart>
            </div>
            <div className=' bg-gray-200 rounded-lg p-3'>
               <h2 className='text-lg font-bold  md:text-xl p-2 text-[#223C6F] text-shadow-lg text-[#223C6F]'>Doctors in Each Department  </h2>
               <ComposedChart
                  width={520}
                  height={300}
                  data={departmentDoctorsData}
                  margin={{
                     top: 20,
                     right: 20,
                     bottom: 20,
                     left: 20,
                  }}
               >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="name" scale="band" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Doctors" barSize={20} fill="#FFB74D" />
                  <Line type="monotone" dataKey="Doctors" stroke="#223C6F" />
               </ComposedChart>
            </div>
         </div>
      </div>
   )
}

export default MainDashboard