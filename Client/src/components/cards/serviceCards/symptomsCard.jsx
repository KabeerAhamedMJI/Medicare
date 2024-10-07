import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import { axiosInstance } from "../../../config/axiosInstance";

function OnlineCard() {
    const [symptoms, setSymptom] = useState([]);

    const symptomsList = async () => {
        try {
    
            const response = await axiosInstance({
                url: `/symtoms/symtomslist`,
                method: "GET",
            })
            setSymptom(response?.data?.data)
            console.log(response?.data?.data)
            return response?.data
        } catch (error) {
            console.log(error)
        }
    }

useEffect(()=>{
    symptomsList()
},[])
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
            <div className="flex flex-row justify-between symptoms-center pl-0 pr-0 md:px-6 mb-8">
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
                    {symptoms.map((symptom) => (
                        <div key={symptom.id} className="slide-symptom px-4">
                            <div className="flex flex-col justify-start gap-4 border-b-2 rounded-lg border-gray-200 pb-4 shadow-lg">
                                <div className="flex flex-col symptoms-center">
                                    <img
                                        className="rounded-t-lg w-full object-cover"
                                        src={symptom.image}
                                        alt={symptom.name}
                                    />
                                    <div className="flex flex-col symptoms-center justify-center p-4">
                                        <h2 className="text-lg font-semibold text-gray-500">{symptom.title}</h2>
                                        <span className="text-gray-600"> ₹ {symptom.cost}</span> 
                                        <div className="flex flex-row symptoms-center pt-4">
                                            <Link to={`/consult/${symptom.id}`} className="text-[#072A6F] text-sm font-semibold hover:text-blue-800 transition">
                                                Consult Now
                                            </Link>
                                            <HiChevronRight className="text-[#072A6F]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default OnlineCard;
