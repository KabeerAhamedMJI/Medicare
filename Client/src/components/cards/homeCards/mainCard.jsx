import React from 'react';
import { Link } from 'react-router-dom';
import mainCardImage from '../../../assets/images/Static Images/MainCard.png';

const MainCard = () => {
  return (
    <div className='hidden md:block  relative container relative bg-[#223C6F] rounded-2xl overflow-hidden text-center'>
      <h1 id='heading' className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl lg:text-10xl text-gray-300 font-bold'>
        Healthcare
      </h1>
      <div className='relative '>
        <img className='w-full h-auto' src={mainCardImage} alt="Healthcare" />
        <div className='sideIcon1 flex items-center gap-3'>
          <div className='bg-[#F3B5C4] rounded-full flex items-center justify-center w-12 h-12'>
            <span className='material-symbols-outlined text-3xl text-[#223C6F]'>
              bloodtype
            </span>
          </div>
          <span className='text-white'>Reduce HbA1c</span>
        </div>
        <div className='sideIcon2 flex items-center gap-3'>
          <div className='bg-[#8DFFC2] rounded-full flex items-center justify-center w-12 h-12'>
            <span className="material-symbols-outlined text-3xl text-[#223C6F]">
              medication
            </span>
          </div>
          <span className='text-white'>No more Medications</span>
        </div>
        <div className='para_Box absolute'>
          <p className='text-white' >COMPREHENSIVE MEDICAL PERSONALIZED CARE, ENSURING THE HIGHEST QUALITY HEALTHCARE FOR ALL PATIENTS.</p>
        </div>
        <Link to="/patient/bookappointment">
          <div className='button_box flex flex-row items-center justify-center gap-1'>
            <div className='bg-[#F3B5C4] p-4 rounded-full'>
              <span className='font-bold'>BOOK APPOINTMENT</span>
            </div>
            <div className='bg-[#F3B5C4] flex items-center justify-center rounded-full w-14 h-14'>
              <i className="fa-solid fa-arrow-right fa-2x"></i>
            </div>
          </div></Link>
      </div>
    </div>
  );
}

export default MainCard;
