import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";

function SymptomsCard() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section className="container mx-auto">
            <div className="flex flex-row justify-between items-center pl-0 pr-0 md:px-6 mb-8">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072A6F]">Common Health Concerns</h2>
                    <span className="text-sm md:text-base text-gray-600 block mt-2">Consult a doctor online for any health issue</span>
                </div>
                <Link to="/specialities">
                    <div className="hidden md:flex border border-gray-500 rounded-lg px-4 py-1 text-base text-gray-700 text-md hover:bg-[#072A6F] hover:text-white transition-all cursor-pointer">
                        See All Symptoms
                    </div>
                </Link>
            </div>
            <div className="slider-container px-6">
                <Slider {...settings}>
                    <div className="slide-item px-6">
                        <div className="flex flex-col justify-start gap-4 border-b-2  rounded-lg border-gray-200 pb-4 shadow-lg">
                            <div className="flex flex-col items-center">
                                <img
                                    className="rounded-t-lg w-full object-cover"
                                    src="https://www.practo.com/consult/static/images/cough-cold-v1.jpg"
                                    alt="Symptom"
                                />
                                <div className="flex flex-col items-center justify-center p-4">
                                    <h2 className="text-xl font-bold text-gray-800">Symptom Name</h2>
                                    <span className="text-gray-600">Rate</span>
                                    <div className="flex flex-row items-center pt-2">
                                        <Link to="" className="text-blue-600 text-sm font-semibold hover:text-blue-800 transition">
                                            Consult Now
                                        </Link>
                                        <HiChevronRight className="text-blue-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide-item px-6 mb-3">
                        <div className="flex flex-col justify-start gap-4 border-b-2  rounded-lg border-gray-200 pb-4 shadow-lg">
                            <div className="flex flex-col items-center">
                                <img
                                    className="rounded-t-lg w-full object-cover"
                                    src="https://www.practo.com/consult/static/images/skin-problems-v1.jpg"
                                    alt="Symptom"
                                />
                                <div className="flex flex-col items-center justify-center p-4">
                                    <h2 className="text-xl font-bold text-gray-800">Symptom Name</h2>
                                    <span className="text-gray-600">Rate</span>
                                    <div className="flex flex-row items-center pt-2">
                                        <Link to="" className="text-blue-600 text-sm font-semibold hover:text-blue-800 transition">
                                            Consult Now
                                        </Link>
                                        <HiChevronRight className="text-blue-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide-item px-6">
                        <div className="flex flex-col justify-start gap-4 border-b-2  rounded-lg border-gray-200 pb-4 shadow-lg">
                            <div className="flex flex-col items-center">
                                <img
                                    className="rounded-t-lg w-full object-cover"
                                    src="https://www.practo.com/consult/static/images/performance-issues-bed-v1.jpg"
                                    alt="Symptom"
                                />
                                <div className="flex flex-col items-center justify-center p-4">
                                    <h2 className="text-xl font-bold text-gray-800">Symptom Name</h2>
                                    <span className="text-gray-600">Rate</span>
                                    <div className="flex flex-row items-center pt-2">
                                        <Link to="" className="text-blue-600 text-sm font-semibold hover:text-blue-800 transition">
                                            Consult Now
                                        </Link>
                                        <HiChevronRight className="text-blue-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide-item px-6">
                        <div className="flex flex-col justify-start gap-4 border-b-2  rounded-lg border-gray-200 pb-4 shadow-lg">
                            <div className="flex flex-col items-center">
                                <img
                                    className="rounded-t-lg w-full object-cover"
                                    src="https://www.practo.com/consult/static/images/period-problems-v1.jpg"
                                    alt="Symptom"
                                />
                                <div className="flex flex-col items-center justify-center p-4">
                                    <h2 className="text-xl font-bold text-gray-800">Symptom Name</h2>
                                    <span className="text-gray-600">Rate</span>
                                    <div className="flex flex-row items-center pt-2">
                                        <Link to="" className="text-blue-600 text-sm font-semibold hover:text-blue-800 transition">
                                            Consult Now
                                        </Link>
                                        <HiChevronRight className="text-blue-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item px-6">
                        <div className="flex flex-col justify-start gap-4 border-b-2  rounded-lg border-gray-200 pb-4 shadow-lg">
                            <div className="flex flex-col items-center">
                                <img
                                    className="rounded-t-lg w-full object-cover"
                                    src="https://www.practo.com/consult/static/images/depression-anxiety-v1.jpg"
                                    alt="Symptom"
                                />
                                <div className="flex flex-col items-center justify-center p-4">
                                    <h2 className="text-xl font-bold text-gray-800">Symptom Name</h2>
                                    <span className="text-gray-600">Rate</span>
                                    <div className="flex flex-row items-center pt-2">
                                        <Link to="" className="text-blue-600 text-sm font-semibold hover:text-blue-800 transition">
                                            Consult Now
                                        </Link>
                                        <HiChevronRight className="text-blue-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item px-6">
                        <div className="flex flex-col justify-start gap-4 border-b-2  rounded-lg border-gray-200 pb-4 shadow-lg">
                            <div className="flex flex-col items-center">
                                <img
                                    className="rounded-t-lg w-full object-cover"
                                    src="https://www.practo.com/consult/static/images/lose-weight-v1.jpg"
                                    alt="Symptom"
                                />
                                <div className="flex flex-col items-center justify-center p-4">
                                    <h2 className="text-xl font-bold text-gray-800">Symptom Name</h2>
                                    <span className="text-gray-600">Rate</span>
                                    <div className="flex flex-row items-center pt-2">
                                        <Link to="" className="text-blue-600 text-sm font-semibold hover:text-blue-800 transition">
                                            Consult Now
                                        </Link>
                                        <HiChevronRight className="text-blue-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item px-6">
                        <div className="flex flex-col justify-start gap-4 border-b-2  rounded-lg border-gray-200 pb-4 shadow-lg">
                            <div className="flex flex-col items-center">
                                <img
                                    className="rounded-t-lg w-full object-cover"
                                    src="https://www.practo.com/consult/static/images/stomach-issues-v1.jpg"
                                    alt="Symptom"
                                />
                                <div className="flex flex-col items-center justify-center p-4">
                                    <h2 className="text-xl font-bold text-gray-800">Symptom Name</h2>
                                    <span className="text-gray-600">Rate</span>
                                    <div className="flex flex-row items-center pt-2">
                                        <Link to="" className="text-blue-600 text-sm font-semibold hover:text-blue-800 transition">
                                            Consult Now
                                        </Link>
                                        <HiChevronRight className="text-blue-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default SymptomsCard;
