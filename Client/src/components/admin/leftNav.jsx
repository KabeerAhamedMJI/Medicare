import React, { useState } from 'react';
import { GiSettingsKnobs } from 'react-icons/gi';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { RiPagesLine } from "react-icons/ri";
import { MdUpdate } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { BsBuildingFillAdd } from "react-icons/bs";
import { BsVirus } from "react-icons/bs";
import { MdBloodtype } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const LeftNav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState({
        dashboard: false,
        appointments: false,
        doctors: false,
        patients: false,
        departments: false,
        offers: false,
        symptoms: false,
        bloodBank: false,
        setting: false

    });

    const toggleDropdown = (menu) => {
        setIsDropdownOpen((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    return (
      
            <div className="  left-0 h-screen bg-gray-200 p-4 shadow-lg">
                <nav className="mt-6">
                    <ul className="space-y-4">
                        <li className="flex items-center justify-between cursor-pointer p-3 bg-[#223C6F] text-white rounded hover:bg-[#223C6F]" onClick={() => toggleDropdown('dashboard')}>
                            <div className="flex items-center">
                                <MdOutlineSpaceDashboard className="mr-3" style={{ fontSize: '22px' }} />
                                <span>Dashboard</span>
                            </div>
                            <div className="ml-2 transition-transform duration-300">
                                {isDropdownOpen.dashboard ? <FaMinus /> : <FaPlus />}
                            </div>
                        </li>
                        {isDropdownOpen.dashboard && (
                            <ul className="mt-2  space-y-2">
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <FaUserDoctor className="mr-2" style={{ fontSize: '20px' }} /> Doctor Dashboard
                                </li>
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <FaUser className="mr-2" style={{ fontSize: '18px' }} /> Patient Dashboard
                                </li>
                            </ul>
                        )}

                        <li className="flex items-center justify-between cursor-pointer p-3 bg-[#223C6F] text-white rounded" onClick={() => toggleDropdown('appointments')}>
                            <div className="flex items-center">
                                <RiPagesLine className="mr-3" style={{ fontSize: '22px' }} />
                                <span>Appointments</span>
                            </div>
                            <div className="ml-2 transition-transform duration-300">
                                {isDropdownOpen.appointments ? <FaMinus /> : <FaPlus />}
                            </div>
                        </li>
                        {isDropdownOpen.appointments && (
                            <ul className="mt-2  space-y-2">
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <GrView className="mr-2" style={{ fontSize: '20px' }} /> View
                                </li>
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <MdUpdate className="mr-2" style={{ fontSize: '20px' }} /> Update
                                </li>
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <MdDeleteForever className="mr-2" style={{ fontSize: '21px' }} /> Delete
                                </li>
                            </ul>
                        )}
                        <li className="flex items-center justify-between cursor-pointer p-3 bg-[#223C6F] text-white rounded" onClick={() => toggleDropdown('doctors')}>
                            <div className="flex items-center">
                                <FaUserDoctor className="mr-3" style={{ fontSize: '22px' }} />
                                <span>Doctors</span>
                            </div>
                            <div className="ml-2 transition-transform duration-300">
                                {isDropdownOpen.doctors ? <FaMinus /> : <FaPlus />}
                            </div>
                        </li>
                        {isDropdownOpen.doctors && (
                            <ul className="mt-2  space-y-2">
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <GrView className="mr-2" style={{ fontSize: '20px' }} /> View
                                </li>
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <MdUpdate className="mr-2" style={{ fontSize: '20px' }} /> Update
                                </li>
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <MdDeleteForever className="mr-2" style={{ fontSize: '21px' }} /> Delete
                                </li>
                            </ul>
                        )}
                        <li className="flex items-center justify-between cursor-pointer p-3 bg-[#223C6F] text-white rounded" onClick={() => toggleDropdown('patients')}>
                            <div className="flex items-center">
                                <FaUser className="mr-3" style={{ fontSize: '22px' }} />
                                <span>Patients</span>
                            </div>
                            <div className="ml-2 transition-transform duration-300">
                                {isDropdownOpen.patients ? <FaMinus /> : <FaPlus />}
                            </div>
                        </li>
                        {isDropdownOpen.patients && (
                            <ul className="mt-2  space-y-2">
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <GrView className="mr-2" style={{ fontSize: '20px' }} /> View
                                </li>
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <MdUpdate className="mr-2" style={{ fontSize: '20px' }} /> Update
                                </li>
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <MdDeleteForever className="mr-2" style={{ fontSize: '21px' }} /> Delete
                                </li>
                            </ul>
                        )}
                        <li className="flex items-center justify-between cursor-pointer p-3 bg-[#223C6F] text-white rounded" onClick={() => toggleDropdown('departments')}>
                            <div className="flex items-center">
                            <BsBuildingFillAdd className="mr-3" style={{ fontSize: '22px' }} />
                                <span>Departments</span>
                            </div>
                            <div className="ml-2 transition-transform duration-300">
                                {isDropdownOpen.departments ? <FaMinus /> : <FaPlus />}
                            </div>
                        </li>
                        {isDropdownOpen.departments && (
                            <ul className="mt-2  space-y-2">
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <GrView className="mr-2" style={{ fontSize: '20px' }} /> View
                                </li>
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <MdUpdate className="mr-2" style={{ fontSize: '20px' }} /> Update
                                </li>
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <MdDeleteForever className="mr-2" style={{ fontSize: '21px' }} /> Delete
                                </li>
                            </ul>
                        )}
                        <li className="flex items-center justify-between cursor-pointer p-3 bg-[#223C6F] text-white rounded" onClick={() => toggleDropdown('offers')}>
                            <div className="flex items-center">
                            <BiSolidOffer className="mr-3" style={{ fontSize: '24px' }} />
                                <span>Offers</span>
                            </div>
                            <div className="ml-2 transition-transform duration-300">
                                {isDropdownOpen.offers ? <FaMinus /> : <FaPlus />}
                            </div>
                        </li>
                        {isDropdownOpen.offers && (
                            <ul className="mt-2  space-y-2">
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <GrView className="mr-2" style={{ fontSize: '20px' }} /> View
                                </li>
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <MdUpdate className="mr-2" style={{ fontSize: '20px' }} /> Update
                                </li>
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <MdDeleteForever className="mr-2" style={{ fontSize: '21px' }} /> Delete
                                </li>
                            </ul>
                        )}
                        <li className="flex items-center justify-between cursor-pointer p-3 bg-[#223C6F] text-white rounded" onClick={() => toggleDropdown('symptoms')}>
                            <div className="flex items-center">
                            <BsVirus className="mr-3" style={{ fontSize: '20px' }} />
                                <span>Symptoms</span>
                            </div>
                            <div className="ml-2 transition-transform duration-300">
                                {isDropdownOpen.symptoms ? <FaMinus /> : <FaPlus />}
                            </div>
                        </li>
                        {isDropdownOpen.symptoms && (
                            <ul className="mt-2  space-y-2">
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <GrView className="mr-2" style={{ fontSize: '20px' }} /> View
                                </li>
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <MdUpdate className="mr-2" style={{ fontSize: '20px' }} /> Update
                                </li>
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <MdDeleteForever className="mr-2" style={{ fontSize: '21px' }} /> Delete
                                </li>
                            </ul>
                        )}
                        <li className="flex items-center justify-between cursor-pointer p-3 bg-[#223C6F] text-white rounded" onClick={() => toggleDropdown('bloodBank')}>
                            <div className="flex items-center">
                            <MdBloodtype className="mr-3" style={{ fontSize: '24px' }} />
                                <span>Blood Bank</span>
                            </div>
                            <div className="ml-2 transition-transform duration-300">
                                {isDropdownOpen.bloodBank ? <FaMinus /> : <FaPlus />}
                            </div>
                        </li>
                        {isDropdownOpen.bloodBank && (
                            <ul className="mt-2  space-y-2">
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <GrView className="mr-2" style={{ fontSize: '20px' }} /> View
                                </li>
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <MdUpdate className="mr-2" style={{ fontSize: '20px' }} /> Update
                                </li>
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <MdDeleteForever className="mr-2" style={{ fontSize: '21px' }} /> Delete
                                </li>
                            </ul>
                        )}
                        <li className="flex items-center justify-between cursor-pointer p-3 bg-[#223C6F] text-white rounded" onClick={() => toggleDropdown('setting')}>
                            <div className="flex items-center">
                            <IoMdSettings className="mr-3" style={{ fontSize: '22px' }} />
                                <span>Settings</span>
                            </div>
                            <div className="ml-2 transition-transform duration-300">
                                {isDropdownOpen.setting ? <FaMinus /> : <FaPlus />}
                            </div>
                        </li>
                        {isDropdownOpen.setting && (
                            <ul className="mt-2  space-y-2">
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <GrView className="mr-2" style={{ fontSize: '20px' }} /> View
                                </li>
                                <li className="flex items-center p-2 cursor-pointer text-[#223C6F] hover:bg-[#223C6F] hover:text-white rounded">
                                    <MdUpdate className="mr-2" style={{ fontSize: '20px' }} /> Update
                                </li>
                            </ul>
                        )}
                    </ul>
                </nav>
            </div>
    );
};

export default LeftNav;