import React, { useState, useEffect } from 'react';
import DarkMode from '../ui/darkMode';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DiscountImage from '../../assets/images/Static Images/Discount.png';
import Logo from '../../assets/images/Static Images/Logo.png';
import { axiosInstance } from '../../config/axiosInstance';
import { FaBookMedical } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaUserAlt } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { patientLogout } from '../../services/patientApi';
import { setpatient } from '../../redux/features/patientSlice';
import { useDispatch, useSelector } from 'react-redux';
import { TbDeviceMobilePlus } from "react-icons/tb";

const AdminHeader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const patient = useSelector((state) => state.patient.patient);

    const fetchPatient = async () => {
        try {
            const response = await axiosInstance({
                url: `/admin/profile`,
                method: 'GET',
                withCredentials: true,
            });
            dispatch(setpatient(response?.data?.data));
        } catch (error) {
            console.error('Error fetching patient:', error);
        }
    };

    const handlePatientLogout = async () => {
        try {
            const response = await patientLogout();

            if (response?.success) {
                navigate('/');
            } else {
                console.log('Logout unsuccessful');
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    useEffect(() => {
        fetchPatient();
    }, []);

    return (
<div className="sticky top-0 mx-auto shadow-lg">
    <div className="flex flex-row items-center justify-between bg-gray-200 p-2 md:p-3"> 
        <div className="flex flex-1 items-center gap-3 md:gap-6"> 
            <div className="border-none md:border-r border-[#223C6F] pr-3">
                <Link to={'/patient'}>
                    <img className="w-28 sm:w-32 md:w-32 lg:w-40 xl:w-48" src={Logo} alt="Logo" />
                </Link>
            </div>
        </div>
        <div className="flex flex-row items-center gap-3 md:gap-8 pr-4"> 
            <div className='p-2 hidden md:flex'>
                <DarkMode />
            </div>
            <div className="dropdown dropdown-bottom flex flex-row items-center justify-center">
                <div id='dropdown2' tabIndex={0} role="button" className="btn m-1 flex flex-row items-center justify-center">
                    <img className='w-8 h-8 rounded-full' src={"https://static.vecteezy.com/system/resources/thumbnails/001/609/720/small_2x/man-face-avatar-cartoon-free-vector.jpg"} alt="Profile" />
                    <span className=' hidden md:flex text-[#223C6F] font-normal'>{patient?.fullName || 'Not available'}</span>
                    <i className="fa-solid fa-caret-down"></i>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-48 p-2 ">
                    <li><Link to="/patient/patientProfilePage" className="text-[#223C6F]"><FaUserAlt className="text-[#223C6F]" /> Account</Link></li>
                    <li><Link to="/patient/appointmentPage" className="text-[#223C6F]"><SlCalender className="text-[#223C6F]" /> Appointments</Link></li>
                    <li><Link to="/medical-records" className="text-[#223C6F]"><FaBookMedical className="text-[#223C6F]" /> Medical Records</Link></li>
                    <li><Link to="/" onClick={handlePatientLogout} className="text-[#223C6F]"><IoLogOut className="text-[#223C6F]" /> Logout</Link></li>
                </ul>
            </div>
        </div>
    </div>
</div>

    );
};

export default AdminHeader;
