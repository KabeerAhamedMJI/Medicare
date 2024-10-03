import React from 'react'

const testCard = () => {
    return (
        <div className='container rounded-2xl bg-[#223C6F] p-10'>
            <h2 className='text-2xl md:text-4xl font-extrabold text-gray-100'>Frequently Book<br></br> Lab Tests</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-6'>
                <div className='bg-[#FFEBE5] rounded-3xl p-8 flex flex-col gap-3'>
                    <span className='inline-block max-w-fit rounded-3xl bg-[#F2BBAA] font-bold pr-3 pl-3 pb-1 pt-1'>60% Off</span>
                    <h3 className='text-lg md:text-2xl font-bold text-[#223C6F]'>Imagin <br />Tests</h3>
                    <p className='text-gray-600 text-justify'>Imaging tests like MRI and CT scans help doctors diagnose internal conditions precise, detailed images.</p>
                </div>
                <div className='bg-[#E0ECE7] rounded-3xl p-8 flex flex-col gap-3'>
                    <span className='inline-block max-w-fit rounded-3xl bg-[#B3E4D0] font-bold pr-3 pl-3 pb-1 pt-1'>30% Off</span>
                    <h3 className='text-lg md:text-2xl font-bold text-[#223C6F]'>MRI & <br />CT Scan</h3>
                    <p className='text-gray-600 text-justify'>MRI & CT scans provide detailed images, helping doctors diagnose and treat various internal conditions accurately.</p>
                </div>
                <div className='bg-[#FFF0CA] rounded-3xl p-8 flex flex-col gap-3'>
                    <span className='inline-block max-w-fit rounded-3xl bg-[#F6D57E] font-bold pr-3 pl-3 pb-1 pt-1'>40% Off</span>
                    <h3 className='text-lg md:text-2xl font-bold text-[#223C6F]'>Orthopedists <br />Tests</h3>
                    <p className='text-gray-600 text-justify'>Orthopedists use X-rays, MRI scans, and exams to diagnose and treat musculoskeletal conditions.</p>
                </div>
               
            </div>

        </div>
    )
}

export default testCard
