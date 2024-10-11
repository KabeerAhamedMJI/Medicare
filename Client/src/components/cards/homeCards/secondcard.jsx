import React from 'react'
import { Link } from 'react-router-dom';
import Image1 from '../../../assets/images/Static Images/1.png'
import Image2 from '../../../assets/images/Static Images/2.png'
import Image3 from '../../../assets/images/Static Images/3.png'
import Image4 from '../../../assets/images/Static Images/4.png'

const secondcard = () => {
  return (
    <section>
      <div className='container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        <div className='relative w-full bg-[#F0DA69] rounded-2xl p-4 flex flex-col items-start'>
          <h3 className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-left max-w-xs'>Instant Video Consultation</h3>
          <span className='text-xs sm:text-sm md:text-base text-left mt-1'>Connect within 60 sec</span>
          <img className='h-24 sm:h-32 md:h-40 lg:h-50 object-cover mt-4 ml-12' src={Image1} alt="Instant Video Consultation 1" />
          <Link>
            <div className='Instant bg-[#223C6F] flex items-center justify-center rounded-full w-10 h-10 sm:w-12 sm:h-12 absolute bottom-4 left-4'>
              <i className="clickArrow fa-solid fa-arrow-right text-white"></i>
            </div>
          </Link>
        </div>

        <div className='relative w-full bg-[#a3dac2] rounded-2xl p-4 flex flex-col items-start'>
          <h3 className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center'>Find Doctors near you</h3>
          <span className='text-xs sm:text-sm md:text-base text-center'>Confirmed appointments</span>
          <img className='h-24 sm:h-32 md:h-40 lg:h-50 object-cover mt-4 ml-8' src={Image2} alt="Find Doctors near you" />
          <Link>
            <div className='Instant bg-[#223C6F] flex items-center justify-center rounded-full w-10 h-10 sm:w-12 sm:h-12 absolute bottom-4 left-4'>
              <i className="clickArrow fa-solid fa-arrow-right text-white"></i>
            </div>
          </Link>
        </div>

        <div className='relative w-full bg-[#E7C2D4] rounded-2xl p-4 flex flex-col items-start'>
          <h3 className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center'>24/7 Medicines</h3>
          <span className='text-xs sm:text-sm md:text-base text-center'>Essentials at your doorstep</span>
          <img className='h-24 sm:h-32 md:h-40 lg:h-50 object-cover mt-4 ml-8' src={Image3} alt="24/7 Medicines" />
          <Link>
            <div className='Instant bg-[#223C6F] flex items-center justify-center rounded-full w-10 h-10 sm:w-12 sm:h-12 absolute bottom-4 left-4'>
              <i className="clickArrow fa-solid fa-arrow-right text-white"></i>
            </div>
          </Link>
        </div>

        <div className='relative w-full bg-[#92BDF6] rounded-2xl p-4 flex flex-col items-start'>
          <h3 className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center'>Lab Tests</h3>
          <span className='text-xs sm:text-sm md:text-base text-center'>Sample pickup at your home</span>
          <img className='h-24 sm:h-32 md:h-40 lg:h-50 object-cover mt-4 ml-8' src={Image4} alt="Lab Tests" />
          <Link>
            <div className='Instant bg-[#223C6F] flex items-center justify-center rounded-full w-10 h-10 sm:w-12 sm:h-12 absolute bottom-4 left-4'>
              <i className="clickArrow fa-solid fa-arrow-right text-white"></i>
            </div>
          </Link>
        </div>
      </div>

    </section>
  )
}

export default secondcard
