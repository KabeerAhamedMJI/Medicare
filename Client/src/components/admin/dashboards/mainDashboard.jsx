import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { BsBuildingFillAdd } from "react-icons/bs";
import { BsVirus } from "react-icons/bs";
import { FaBookMedical } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const MainDashboard = () => {
    return (
        <div>
            <h1 className='md:mt-6 text-4xl font-bold text-[#223C6F]'>Medicare <span className='text-[#FA9334]'>Dashboard</span></h1>
            <div>
                <div className='pt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                <div className='relative w-full bg-[#FFB74D] rounded-2xl p-4 flex flex-col items-start'>
                       <div className='flex flex-row items-center justify-center'>
                       <RiPagesLine className="mr-2 text-white p-1"  style={{ fontSize: '40px' }} />
                       <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center'>Appointments</h3>
                       </div>
                    </div>
                    <div className='relative w-full bg-[#FFB74D] rounded-2xl p-4 flex flex-col items-start'>
                       <div className='flex flex-row items-center justify-center'>
                       <FaUser className="mr-2 text-white p-1"  style={{ fontSize: '40px' }} />
                       <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center'>Patients</h3>
                       </div>
                    </div>
                    <div className='relative w-full bg-[#FFB74D] rounded-2xl p-4 flex flex-col items-start'>
                       <div className='flex flex-row items-center justify-center'>
                       <FaUserDoctor className="mr-2 text-white  p-1"  style={{ fontSize: '40px' }} />
                       <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center'>Doctors</h3>
                       </div>
                    </div>
                    <div className='relative w-full bg-[#FFB74D] rounded-2xl p-4 flex flex-col items-start'>
                       <div className='flex flex-row items-center justify-center'>
                       <BsBuildingFillAdd className="mr-2 text-white p-1"  style={{ fontSize: '40px' }} />
                       <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center'>Departments</h3>
                       </div>
                    </div>
                    <div className='relative w-full bg-[#FFB74D] rounded-2xl p-4 flex flex-col items-start'>
                       <div className='flex flex-row items-center justify-center'>
                       <BiSolidOffer className="mr-2 text-white p-1"  style={{ fontSize: '40px' }} />
                       <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center'>Offers</h3>
                       </div>
                    </div>
                    <div className='relative w-full bg-[#FFB74D] rounded-2xl p-4 flex flex-col items-start'>
                       <div className='flex flex-row items-center justify-center'>
                       <BsVirus className="mr-2 text-white  p-1"  style={{ fontSize: '36px' }} />
                       <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center'>Symptoms</h3>
                       </div>
                    </div>
                    <div className='relative w-full bg-[#FFB74D] rounded-2xl p-4 flex flex-col items-start'>
                       <div className='flex flex-row items-center justify-center'>
                       <FaBookMedical className="mr-2 text-white p-1"  style={{ fontSize: '40px' }} />
                       <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center'>Medical Records</h3>
                       </div>
                    </div>
                    <div className='relative w-full bg-[#FFB74D] rounded-2xl p-4 flex flex-col items-start'>
                       <div className='flex flex-row items-center justify-center'>
                       <FaUser className="mr-2 text-white p-1"  style={{ fontSize: '40px' }} />
                       <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center'>Patients</h3>
                       </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default MainDashboard
