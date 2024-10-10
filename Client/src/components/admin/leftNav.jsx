import React, { useState } from 'react';
import { GiSettingsKnobs } from 'react-icons/gi';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { IoMdHelpCircle } from 'react-icons/io';
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { RiPagesLine } from "react-icons/ri";
import { MdUpdate } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const LeftNav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState({
        dashboard: false,
        appointments: false,
        doctors: false,
    });

    const toggleDropdown = (menu) => {
        setIsDropdownOpen((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    return (
        <div className="flex">
            <div className="fixed top-15 left-0 h-full bg-gray-200 w-[15%] p-4 shadow-lg">
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
                            <ul className="mt-2 pl-2 space-y-2">
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
                            <ul className="mt-2 pl-4 space-y-2">
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
                                <RiPagesLine className="mr-3" style={{ fontSize: '22px' }} />
                                <span>Doctors</span>
                            </div>
                            <div className="ml-2 transition-transform duration-300">
                                {isDropdownOpen.doctors ? <FaMinus /> : <FaPlus />}
                            </div>
                        </li>
                        {isDropdownOpen.doctors && (
                            <ul className="mt-2 pl-4 space-y-2">
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
                                <RiPagesLine className="mr-3" style={{ fontSize: '22px' }} />
                                <span>Doctors</span>
                            </div>
                            <div className="ml-2 transition-transform duration-300">
                                {isDropdownOpen.doctors ? <FaMinus /> : <FaPlus />}
                            </div>
                        </li>
                        {isDropdownOpen.doctors && (
                            <ul className="mt-2 pl-4 space-y-2">
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
                                <RiPagesLine className="mr-3" style={{ fontSize: '22px' }} />
                                <span>Doctors</span>
                            </div>
                            <div className="ml-2 transition-transform duration-300">
                                {isDropdownOpen.doctors ? <FaMinus /> : <FaPlus />}
                            </div>
                        </li>
                        {isDropdownOpen.doctors && (
                            <ul className="mt-2 pl-4 space-y-2">
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
                                <RiPagesLine className="mr-3" style={{ fontSize: '22px' }} />
                                <span>Doctors</span>
                            </div>
                            <div className="ml-2 transition-transform duration-300">
                                {isDropdownOpen.doctors ? <FaMinus /> : <FaPlus />}
                            </div>
                        </li>
                        {isDropdownOpen.doctors && (
                            <ul className="mt-2 pl-4 space-y-2">
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
                                <RiPagesLine className="mr-3" style={{ fontSize: '22px' }} />
                                <span>Doctors</span>
                            </div>
                            <div className="ml-2 transition-transform duration-300">
                                {isDropdownOpen.doctors ? <FaMinus /> : <FaPlus />}
                            </div>
                        </li>
                        {isDropdownOpen.doctors && (
                            <ul className="mt-2 pl-4 space-y-2">
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
                                <RiPagesLine className="mr-3" style={{ fontSize: '22px' }} />
                                <span>Doctors</span>
                            </div>
                            <div className="ml-2 transition-transform duration-300">
                                {isDropdownOpen.doctors ? <FaMinus /> : <FaPlus />}
                            </div>
                        </li>
                        {isDropdownOpen.doctors && (
                            <ul className="mt-2 pl-4 space-y-2">
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
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default LeftNav;
