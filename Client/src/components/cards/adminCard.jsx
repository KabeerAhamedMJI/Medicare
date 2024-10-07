{
    offer.slice(1, 2).map((offer) => (
        <div key={offer.id} className='flex flex-col md:flex-row bg-[#fdba80] w-full p-6 rounded-lg shadow-lg '>
<div className='flex-grow'>
        <span className='p-1 bg-white text-sm font-semibold text-[#fdba80] rounded-sm mb-3 inline-block'>OFFER</span>
        <h2 className='text-2xl font-bold mb-3'>Free Consultation</h2>
        <p className='text-sm mb-4'>Book a free consultation with our experts and get the best advice.</p>
        <Link to="/" className='flex flex-row items-center gap-1'>
            <h2 className='text-[#072A6F] font-bold'>Consult Now</h2>
            <TbSquareRoundedChevronRightFilled className='w-5 h-5 text-[#072A6F]' />
        </Link>
    </div>
    <img src="https://via.placeholder.com/150" alt="Offer Image" className='w-52 h-52 object-contain self-center md:self-start' />
            

        </div>
    ))
}


<div className='flex flex-col md:flex-row bg-[#fdba80] w-full p-6 rounded-lg shadow-lg '>
    <div className='flex-grow'>
        <span className='p-1 bg-white text-sm font-semibold text-[#fdba80] rounded-sm mb-3 inline-block'>OFFER</span>
        <h2 className='text-2xl font-bold mb-3'>Free Consultation</h2>
        <p className='text-sm mb-4'>Book a free consultation with our experts and get the best advice.</p>
        <Link to="/" className='flex flex-row items-center gap-1'>
            <h2 className='text-[#072A6F] font-bold'>Consult Now</h2>
            <TbSquareRoundedChevronRightFilled className='w-5 h-5 text-[#072A6F]' />
        </Link>
    </div>
    <img src="https://via.placeholder.com/150" alt="Offer Image" className='w-52 h-52 object-contain self-center md:self-start' />
</div>