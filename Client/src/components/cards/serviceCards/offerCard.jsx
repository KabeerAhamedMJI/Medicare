import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TbSquareRoundedChevronRightFilled } from "react-icons/tb";
import { axiosInstance } from '../../../config/axiosInstance';

const OfferCard = () => {
    const [offer, setOffer] = useState([])


    const offerList = async () => {
        try {

            const response = await axiosInstance({
                url: `/offer/offerlist`,
                method: "GET",
            })
            setOffer(response?.data?.data)
            console.log(response?.data?.data)
            return response?.data
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        offerList()
    }, [])

    return (
        <section className='container'>
            <div className='mx-auto'>
                <h2 className="text-2xl md:text-3xl font-bold text-[#072A6F] text-start md:pl-4 mb-6">Exclusive Offers</h2>
                <div className='flex flex-col md:flex-row mx-auto p-3 gap-6'>
                    {offer.slice(0, 1).map((offer) => (
                        <div key={offer.id} className='flex flex-col md:flex-row bg-[#8ACDB0] w-full p-6 rounded-lg shadow-lg '>
                            <div className='flex-grow'>
                                <span className='p-1 bg-white text-sm font-semibold text-[#8ACDB0] rounded-sm mb-3 inline-block'>OFFER</span>
                                <h2 className='text-2xl font-bold mb-3 text-gray-700'>{offer.title}</h2>
                                <p className='text-sm mb-4'>{offer.description}</p>
                                <Link to="/" className='flex flex-row items-center gap-1'>
                                    <h2 className='text-[#072A6F] font-bold'>Download App</h2>
                                    <TbSquareRoundedChevronRightFilled className='w-5 h-5 text-[#072A6F]' />
                                </Link>
                                <span className='hidden md:flex mt-auto text-gray-500 text-xs'>{offer.termsAndConditions}*</span>
                            </div>
                            <img src={offer.image} alt="Offer Image" className='w-52 h-52 object-contain self-center md:self-start' />
                            <span className='flex md:hidden mt-auto text-gray-500 text-xs'>{offer.termsAndConditions}*</span>
                        </div>
                    ))}
                    {offer.slice(1, 2).map((offer) => (
                        <div key={offer.id} className='flex flex-col md:flex-row bg-[#fdba80] w-full p-6 rounded-lg shadow-lg '>
                            <div className='flex-grow'>
                                <span className='p-1 bg-white text-sm font-semibold text-[#fdba80] rounded-sm mb-3 inline-block'>OFFER</span>
                                <h2 className='text-2xl font-bold mb-3 text-gray-700'>{offer.title}</h2>
                                <p className='text-sm mb-4'>{offer.description}</p>
                                <Link to="/" className='flex flex-row items-center gap-1'>
                                    <h2 className='text-[#072A6F] font-bold'>Consult Now</h2>
                                    <TbSquareRoundedChevronRightFilled className='w-5 h-5 text-[#072A6F]' />
                                </Link>
                                <span className='hidden md:flex mt-auto text-gray-500 text-xs'>{offer.termsAndConditions}*</span>
                            </div>
                            <img
                                src={offer.image}
                                alt="Offer Image"
                                className='w-52 h-52 object-contain md:self-start'
                                style={{
                                    WebkitMaskImage: 'linear-gradient(180deg, black 80%, transparent 100%)',
                                    maskImage: 'linear-gradient(180deg, black 80%, transparent 100%)'
                                }}
                            />
                            <span className='flex md:hidden mt-auto text-gray-500 text-xs'>{offer.termsAndConditions}*</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OfferCard
