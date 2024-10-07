import React from 'react';
import DarkMode from './ui/darkMode';
import { Link } from 'react-router-dom';
import DiscountImage from '../assets/images/Static Images/Discount.png';
import Logo from '../assets/images/Static Images/Logo.png';
import { TbDeviceMobilePlus } from "react-icons/tb";

const Header = () => {
  return (
    <div className="headerBox container mx-auto mt-6">
      <div className="flex flex-row items-center justify-between bg-gray-200 rounded-2xl p-3">
        <div className="flex flex-1 items-center gap-4 md:gap-6">
          <div className="border-none md:border-r border-[#223C6F] pr-3">
            <Link to={'/'}>
              <img className="w-28 sm:w-32 md:w-32 lg:w-40 xl:w-48" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="relative flex items-center w-full max-w-xs hidden md:flex">
            <i className="fa-solid fa-magnifying-glass absolute left-3 text-[#223C6F] text-xs sm:text-sm md:text-base" />
            <input
              type="text"
              placeholder="Search..."
              className="input pl-10 w-full rounded-xxl text-sm sm:text-base"
            />
          </div>
          <Link to="/servicePage">
            <div className='md:ml-12'>
              <div tabIndex={0} role="button" className="border border-[#223C6F] text-[#223C6F] rounded-md px-2 py-1 gap-2 flex items-center text-xs sm:text-sm md:text-sm shadow-md hover:bg-[#223C6F] hover:text-white active:scale-100 transition-colors duration-200 ease-in-out whitespace-nowrap">
                <TbDeviceMobilePlus className="w-4 h-4 sm:w-3 sm:h-3 md:w-6 md:h-6" />
                <span>Consult Online</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-row items-center gap-4 md:gap-8 pr-4 ">
          <div>
            <Link className="hidden md:flex flex-row items-center gap-1 text-sm sm:text-base" to={'/'}>
              <img className="w-5 sm:w-6 md:w-6 lg:w-6 xl:w-6" src={DiscountImage} alt="Discount" />
              <span className="text-[#FA9334]">Offers</span>
            </Link>
          </div>
          <div className='p-2 hidden md:flex'>
            <DarkMode />
          </div>
          <div className='flex'>
            <Link to="/patientLoginpage" className="flex flex-row items-center gap-1 text-sm sm:text-base">
              <span style={{ color: '#223C6F' }} className="material-symbols-outlined ">
                person
              </span>
              <span style={{ color: '#223C6F' }}>
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
