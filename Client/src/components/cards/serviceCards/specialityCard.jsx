import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setdepartment } from '../../../redux/features/departmentSlice';
import { axiosInstance } from '../../../config/axiosInstance';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronRight } from "react-icons/hi";

const SpecialityCard = () => {
    const dispatch = useDispatch();
    const departments = useSelector((state) => state.department.department);
    console.log(departments)

    useEffect(() => {
        if (departments.length === 0) {
            const fetchDepartments = async () => {
                try {
                    const response = await axiosInstance({
                        url: `/department/departmentList`,
                        method: 'GET',
                    });

                    const departmentData = response?.data?.data || [];
                    dispatch(setdepartment(departmentData));
                } catch (error) {
                    console.log('Error fetching departments: ', error);
                }
            };

            fetchDepartments();
        }
    }, [dispatch, departments]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
    };

    return (
        <section className="container">
            <div className='mx-auto p-3'>
                <div className='flex flex-row justify-between items-center pl-0 pr-0 md:px-6 mb-8'>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#072A6F]">25+ Specialities</h2>
                        <span className="text-sm md:text-base text-gray-600 block mt-2">Consult with top doctors across specialities</span>
                    </div>
                    <Link to="/specialities">
                        <div className="hidden md:flex border border-gray-500 rounded-lg px-4 py-1 text-base text-gray-700 text-md hover:bg-[#072A6F] hover:text-white transition-all cursor-pointer">
                            See all specialities
                        </div>
                    </Link>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        {departments && departments.length > 0 ? (
                            departments.map((department) => (
                                <div key={department._id} className='flex justify-center pb-3 flex overflow-x-auto space-x-4 pb-4'>
                                    <div className='flex flex-col items-center border border-gray-200 rounded-lg p-3 w-40 overflow-x-auto md:overflow-x-visible'>
                                        <img src={department.image}
                                            alt={department.name}
                                            className='w-22 h-22 mb-4'
                                        />
                                        <div className='flex flex-col items-center gap-2'>
                                            <h3 className="text-base font-semibold text-gray-500 mb-2">{department.name}</h3>
                                            <span className="text-sm text-gray-500 mb-1">₹ {department.consultationFee}</span>
                                            <div className='flex flex-row items-center'>
                                                <Link to="/patient/bookappointment" className="text-[#072A6F] text-sm font-medium font-semibold">
                                                    Consult Now
                                                </Link>
                                                <HiChevronRight />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No departments available.</p>
                        )}
                    </Slider>
                </div>
            </div>
            <Link to="/specialities">
                <div className="flex block md:hidden border border-gray-500 rounded-lg px-4 py-1 text-base text-gray-700 text-md hover:bg-[#072A6F] hover:text-white transition-all cursor-pointer mt-3 justify-center items-center">
                    See all specialities
                </div>
            </Link>
        </section>
    );
};

export default SpecialityCard;
