import React, { useState, useEffect } from 'react';
import DarkMode from '../ui/darkMode';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Logo from '../../assets/images/Static Images/Logo.png';
import { axiosInstance } from '../../config/axiosInstance';
import { FaBookMedical } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaUserAlt } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

const AdminHeader = () => {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState()

    const fetchAdmin = async () => {
        try {
            const response = await axiosInstance({
                url: `/admin/profile`,
                method: 'GET',
                withCredentials: true,
            });
            console.log(response?.data?.data)
            setAdmin(response?.data?.data);
        } catch (error) {
            console.error('Error fetching admin:', error);
        }
    };

    useEffect(() => {
        fetchAdmin();
    }, []);

    return (
    <div className="flex flex-row  items-center justify-between bg-gray-200 p-2 md:p-3"> 
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
                    <img className='w-8 h-8 rounded-full' src={admin ? admin.profilePic :""} alt="Profile" />
                    <span className=' hidden md:flex text-[#223C6F] font-normal'>{admin ? admin.doctorName : ''}</span>
                    <i className="fa-solid fa-caret-down"></i>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-48 p-2 ">
                    <li><Link to="/patient/patientProfilePage" className="text-[#223C6F]"><FaUserAlt className="text-[#223C6F]" /> Account</Link></li>
                    <li><Link to="/patient/appointmentPage" className="text-[#223C6F]"><SlCalender className="text-[#223C6F]" /> Appointments</Link></li>
                    <li><Link to="/medical-records" className="text-[#223C6F]"><FaBookMedical className="text-[#223C6F]" /> Medical Records</Link></li>
                    <li><Link to="/" onClick="" className="text-[#223C6F]"><IoLogOut className="text-[#223C6F]" /> Logout</Link></li>
                </ul>
            </div>
        </div>
    </div>

    );
};

export default AdminHeader;
