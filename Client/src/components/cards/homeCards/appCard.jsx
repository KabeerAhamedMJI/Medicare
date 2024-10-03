import React from 'react'
import { Link } from 'react-router-dom';
import appImage from '../../../assets/images/Static Images/app.png'

const appCard = () => {
    return (
        <div className='container flex flex-col md:flex-row mt-8 md:mt-16 gap-6'>
            <div className='flex flex-col w-full md:w-1/2 bg-[#F0DA69] rounded-2xl shadow pt-12 flex items-center'>
                <h2 className='text-[#223C6F] text-lg md:text-2xl lg:text-3xl pr-3 pl-3 font-bold'>
                    Download Our <br />
                    <span className='text-white'>Healthcare </span>app for easy access.
                </h2>
                <div className='flex flex-row items-center justify-center space-x-4'>
                    <Link to="#">
                        <img
                            src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                            alt="App Store"
                            className='w-32 md:w-40 lg:w-48'
                        />
                    </Link>
                    <Link to="#">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"
                            alt="Google Play"
                            className='w-32 md:w-40 lg:w-48'
                        />
                    </Link>
                </div>
            </div>
            <div className='bg-[#E0ECE7] w-full md:w-1/2 rounded-2xl shadow flex flex-col md:flex-row items-center justify-between p-4 md:p-0'>
                <div className='flex flex-col justify-center gap-2 md:pl-8 text-center md:text-left'>
                    <h2 className='text-[#223C6F] text-lg sm:text-xl md:text-3xl font-bold'>
                        DoctorPro
                    </h2>
                    <span className='text-gray-600 text-sm sm:text-base'>
                        8 in 1 Doctor & <br /> Medical App Solution
                    </span>
                </div>
                <img
                    className='rounded-2xl object-cover w-full h-40 max-h-52 md:h-full md:max-h-72 mt-4 md:mt-0'
                    src={appImage}
                    alt="Healthcare App"
                />
            </div>
        </div>

    )
}

export default appCard
