import React from 'react';
import { Link } from 'react-router-dom';

const MainCard = () => {
    return (
        <section>
            <div className="container bg-[#FFEBE5] rounded-2xl flex flex-col md:flex-row items-center pb-12 pr-12 md:pb-0 md:pr-0 pl-12 pt-12 md:pl-12 md:pt-12 space-y-6 md:space-y-0 md:space-x-8"            >
                <div className="w-full md:w-3/6 flex flex-col justify-center space-y-4 text-center md:text-left">
                    <h2 className="text-1xl md:text-2xl font-bold text-[#072A6F] leading-snug">
                        Skip the commute! Book Online Doctor Consultations for Convenient, Expert Care.
                    </h2>
                    <span className="text-sm md:text-base text-gray-700">
                        Private consultation + Audio call · Starts at just ₹199
                    </span>
                    <Link to="/patient/bookappointment">
                        <div className="flex justify-center md:justify-start">
                            <div className="bg-[#072A6F] hover:bg-[#0a397f] pl-4 pr-4 pb-2 pt-2 rounded-full transition duration-300 ease-in-out">
                                <span className="text-xs md:text-sm text-white font-semibold">CONSULT NOW</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="w-full md:w-3/5 hidden md:flex">
                    <img src="https://www.practo.com/consult/static/images/homepage-hero-image-web-v1.png" alt="Online Consultation" className=" w-full h-80" />
                </div>
            </div>

        </section>
    );
};

export default MainCard;
