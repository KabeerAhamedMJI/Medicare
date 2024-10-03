import React from 'react'

const reviewCard = () => {
    return (
        <div className='container'>
            <div className='p-8 md:mt-8'>
                <h2 className="text-1xl md:text-5xl font-extrabold flex flex-col items-center justify-center text-center leading-tight text-[#223C6F] ">Our doctors and clinic have earned<br /> over 100+ reviews on Google </h2>
            </div>
            <div className="rating flex flex-col justify-center items-center">
                <div>
                    <input type="radio" name="rating" className="mask mask-star-2 bg-green-400" />
                    <input type="radio" name="rating" className="mask mask-star-2 bg-green-400" />
                    <input type="radio" name="rating" className="mask mask-star-2 bg-green-400" />
                    <input type="radio" name="rating" className="mask mask-star-2 bg-green-400" defaultChecked />
                    <input type="radio" name="rating" className="mask mask-star-2 bg-green-400" />
                </div>
                <h2>Average Google Rating is 4</h2>
            </div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className='rounded-3xl border-2 mt-5 flex p-6 flex-col md:flex-row shadow-md hover:shadow-lg transition-shadow duration-300'>
                        <div className='w-full md:w-1/2 flex flex-row p-4 items-center justify-center gap-4 border-b-2 md:border-b-0 md:border-r-2'>
                            <div className="flex justify-center items-center">
                                <img
                                    className="w-16 h-16 md:w-24 md:h-24 lg:w-24 lg:h-24 rounded-full object-cover p-2 shadow-lg transition-transform duration-300 hover:scale-105"
                                    src="https://img.freepik.com/free-photo/close-up-portrait-young-indian-man-with-beard-white-shirt-isolated-standing-smiling_155003-23823.jpg"
                                    alt="patient"
                                />
                            </div>
                            <div className='flex flex-row md:flex-col'>
                                <span className='font-bold text-lg'>Shankar Mohan</span>
                                <span className='text-gray-500'>Patient</span>
                            </div>
                        </div>
                        <div className='p-4 md:p-6'>
                            <p className='text-base md:text-lg text-gray-500 text-justify'>
                                I had an outstanding experience at this Medicare clinic. From the moment I arrived,who made me feel comfortable and welcomed. The check-in process was quick and efficient, ensuring I didn’t have to wait long before being seen.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className='rounded-3xl border-2 mt-5 flex p-6 flex-col md:flex-row shadow-md hover:shadow-lg transition-shadow duration-300'>
                        <div className='w-full md:w-1/2 flex flex-row p-4 items-center justify-center gap-4 border-b-2 md:border-b-0 md:border-r-2'>
                            <div className="flex justify-center items-center">
                                <img
                                    className="w-16 h-16 md:w-24 md:h-24 lg:w-24 lg:h-24 rounded-full object-cover p-2 shadow-lg transition-transform duration-300 hover:scale-105"
                                    src="https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A="
                                    alt="patient"
                                />
                            </div>
                            <div className='flex flex-row md:flex-col'>
                                <span className='font-bold text-lg'>Deepika Sharma</span>
                                <span className='text-gray-500'>Patient</span>
                            </div>
                        </div>
                        <div className='p-4 md:p-6'>
                            <p className='text-base md:text-lg text-gray-500 text-justify'>
                            The moment I walked into this Medicare clinic, I knew I was in good hands. The staff greeted me warmly, and the whole process was smooth from start to finish. Check-in was efficient, and I didn’t have to wait long before being seen.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div className='rounded-3xl border-2 mt-5 flex p-6 flex-col md:flex-row shadow-md hover:shadow-lg transition-shadow duration-300'>
                        <div className='w-full md:w-1/2 flex flex-row p-4 items-center justify-center gap-4 border-b-2 md:border-b-0 md:border-r-2'>
                            <div className="flex justify-center items-center">
                                <img
                                    className="w-16 h-16 md:w-24 md:h-24 lg:w-24 lg:h-24 rounded-full object-cover p-2 shadow-lg transition-transform duration-300 hover:scale-105"
                                    src="https://img.freepik.com/free-photo/closeup-smiling-young-beautiful-indian-woman_1262-2261.jpg"
                                    alt="patient"
                                />
                            </div>
                            <div className='flex flex-row md:flex-col'>
                                <span className='font-bold text-lg'>Priyanka Kiran</span>
                                <span className='text-gray-500'>Patient</span>
                            </div>
                        </div>
                        <div className='p-4 md:p-6'>
                            <p className='text-base md:text-lg text-gray-500 text-justify'>
                            I couldn’t have asked for a better experience at this Medicare clinic. The staff was incredibly welcoming and made sure I was comfortable throughout my visit. The check-in process was quick, and I appreciated how promptly I was attended to.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <div className='rounded-3xl border-2 mt-5 flex p-6 flex-col md:flex-row shadow-md hover:shadow-lg transition-shadow duration-300'>
                        <div className='w-full md:w-1/2 flex flex-row p-4 items-center justify-center gap-4 border-b-2 md:border-b-0 md:border-r-2'>
                            <div className="flex justify-center items-center">
                                <img
                                    className="w-16 h-16 md:w-24 md:h-24 lg:w-24 lg:h-24 rounded-full object-cover p-2 shadow-lg transition-transform duration-300 hover:scale-105"
                                    src="https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg"
                                    alt="patient"
                                />
                            </div>
                            <div className='flex flex-row md:flex-col'>
                                <span className='font-bold text-lg'>Imran Ahmed</span>
                                <span className='text-gray-500'>Patient</span>
                            </div>
                        </div>
                        <div className='p-4 md:p-6'>
                            <p className='text-base md:text-lg text-gray-500 text-justify'>
                            From the time I stepped through the doors, the experience at this Medicare clinic was top-notch. The staff made me feel right at home, and the check-in process was handled swiftly, so I didn’t have to wait long to see the doctor.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="item5" className="carousel-item w-full">
                    <div className='rounded-3xl border-2 mt-5 flex p-6 flex-col md:flex-row shadow-md hover:shadow-lg transition-shadow duration-300'>
                        <div className='w-full md:w-1/2 flex flex-row p-4 items-center justify-center gap-4 border-b-2 md:border-b-0 md:border-r-2'>
                            <div className="flex justify-center items-center">
                                <img
                                    className="w-16 h-16 md:w-24 md:h-24 lg:w-24 lg:h-24 rounded-full object-cover p-2 shadow-lg transition-transform duration-300 hover:scale-105"
                                    src="https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-146312.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727740800&semt=ais_hybrid"
                                    alt="patient"
                                />
                            </div>
                            <div className='flex flex-row md:flex-col'>
                                <span className='font-bold text-lg'>Varun Das</span>
                                <span className='text-gray-500'>Patient</span>
                            </div>
                        </div>
                        <div className='p-4 md:p-6'>
                            <p className='text-base md:text-lg text-gray-500 text-justify'>
                            I’m so impressed with the service at this Medicare clinic. The staff was very attentive from the beginning, ensuring I was comfortable and well taken care of. The check-in process was smooth and quick, with no unnecessary delays.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2 bg-dotted">
                <a href="#item1" className="w-3 h-3 bg-gray-500 rounded-full hover:bg-gray-700"></a>
                <a href="#item2" className="w-3 h-3 bg-gray-500 rounded-full hover:bg-gray-700"></a>
                <a href="#item3" className="w-3 h-3 bg-gray-500 rounded-full hover:bg-gray-700"></a>
                <a href="#item4" className="w-3 h-3 bg-gray-500 rounded-full hover:bg-gray-700"></a>
                <a href="#item5" className="w-3 h-3 bg-gray-500 rounded-full hover:bg-gray-700"></a>
            </div>
        </div>
    )
}

export default reviewCard
