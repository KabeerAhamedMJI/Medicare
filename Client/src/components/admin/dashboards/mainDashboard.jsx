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
                <div className='relative w-full bg-[#FFB74D] rounded-xl p-4 flex flex-col items-start'>
                       <div className='flex flex-row items-center justify-center'>
                       <RiPagesLine className="mr-2 text-white p-1 icon-shadow"  style={{ fontSize: '40px' }} />
                       <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center text-shadow-lg'>Appointments</h3>
                       </div>
                       <h2 className='text-4xl text-[#223c6f] font-bold ml-12 text-shadow-lg'>85</h2>
                    </div>
                    <div className='relative w-full bg-[#FFB74D] rounded-xl p-4 flex flex-col items-start'>
                       <div className='flex flex-row items-center justify-center'>
                       <FaUser className="mr-2 text-white p-1 icon-shadow"  style={{ fontSize: '40px' }} />
                       <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center text-shadow-lg'>Patients</h3>
                       </div>
                       <div className='flex flex-row items-center gap-2 text-[#223c6f]'>
                       <h2 className='text-4xl text-[#223c6f] font-bold ml-12 text-shadow-lg'>120</h2>
                       <span className='text-base items-center justify-center text-shadow-lg'>Registered</span>
                       </div>
                    </div>
                    <div className='relative w-full bg-[#FFB74D] rounded-xl p-4 flex flex-col items-start'>
                       <div className='flex flex-row items-center justify-center'>
                       <FaUserDoctor className="mr-2 text-white p-1 icon-shadow"  style={{ fontSize: '40px' }} />
                       <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center text-shadow-lg'>Doctors</h3>
                       </div>
                       <div className='flex flex-row items-center gap-2 text-[#223c6f]'>
                       <h2 className='text-4xl text-[#223c6f] font-bold ml-12 text-shadow-lg'>42</h2>
                       <span className='text-base items-center justify-center text-shadow-lg'>Doctors Active</span>
                       </div>
                    </div>
                    <div className='relative w-full bg-[#FFB74D] rounded-xl p-4 flex flex-col items-start'>
                       <div className='flex flex-row items-center justify-center'>
                       <BsBuildingFillAdd className="mr-2 text-white p-1 icon-shadow"  style={{ fontSize: '40px' }} />
                       <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center text-shadow-lg'>Departments</h3>
                       </div>
                       <h2 className='text-4xl text-[#223c6f] font-bold ml-12 text-shadow-lg'>12</h2>
                    </div>
                    <div className='relative w-full bg-[#FFB74D] rounded-xl p-4 flex flex-col items-start'>
                       <div className='flex flex-row items-center justify-center'>
                       <BiSolidOffer className="mr-2 text-white p-1 icon-shadow"  style={{ fontSize: '40px' }} />
                       <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center text-shadow-lg'>Offers</h3>
                       </div>
                       <div className='flex flex-row items-center gap-2 text-[#223c6f]'>
                       <h2 className='text-4xl text-[#223c6f] font-bold ml-12 text-shadow-lg'>2</h2>
                       <span className='text-base items-center justify-center text-shadow-lg'>Offers Active</span>
                       </div>
                    </div>
                    <div className='relative w-full bg-[#FFB74D] rounded-xl p-4 flex flex-col items-start'>
                       <div className='flex flex-row items-center justify-center'>
                       <BsVirus className="mr-2 text-white p-1 icon-shadow"  style={{ fontSize: '36px' }} />
                       <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center text-shadow-lg'>Symptoms</h3>
                       </div>
                       <h2 className='text-4xl text-[#223c6f] font-bold ml-12 text-shadow-lg'>13</h2>
                    </div>
                    <div className='relative w-full bg-[#FFB74D] rounded-xl p-4 flex flex-col items-start'>
                       <div className='flex flex-row items-center justify-center'>
                       <FaBookMedical className="mr-2 text-white p-1 icon-shadow"  style={{ fontSize: '40px' }} />
                       <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center text-shadow-lg'>Medical Records</h3>
                       </div>
                       <h2 className='text-4xl text-[#223c6f] font-bold ml-12 text-shadow-lg'>185</h2>
                    </div>
                    <div className='relative w-full bg-[#FFB74D] rounded-xl p-4 flex flex-col items-start'>
                       <div className='flex flex-row items-center justify-center'>
                       <MdBloodtype className="mr-2 text-white p-1 icon-shadow" style={{ fontSize: '40px' }} />
                       <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-[#223C6F] font-semibold text-center text-shadow-lg'>Blood Bank</h3>
                       </div>
                       <div className='flex flex-row items-center gap-1 text-[#223c6f]'>
                       <h2 className='text-4xl text-[#223c6f] font-bold ml-12 text-shadow-lg'>8</h2>
                       <span className='text-base items-center justify-center text-shadow-lg'>Groups Available</span>
                       </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default MainDashboard
