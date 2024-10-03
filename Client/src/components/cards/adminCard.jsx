<button
    key={department._id}
    className={`px-6 py-2 text-m font-semibold rounded-full m-1 w-full max-w-xs h-14 ${activeTab === department._id? 'bg-[#223C6F] text-white': 'bg-gray-300 text-[#223C6F]'} focus:outline-none transition-colors duration-300 ease-in-out`}
    onClick={handleTabChange(department)}
>
    {department.name}
</button>