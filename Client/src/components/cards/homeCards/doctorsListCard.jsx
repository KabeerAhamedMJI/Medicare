import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../../config/axiosInstance';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setdepartment } from '../../../redux/features/departmentSlice';

export const DoctorsListCard = () => {
    const [departments, setDepartments] = useState([]);
    const [activeTab, setActiveTab] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const [activeDepartment, setActiveDepartment] = useState(null);
    const departmentses = useSelector((state) => state.department.department);
    console.log('Redux departments state:', departmentses);
    const dispatch = useDispatch();

    const fetchDepartments = async () => {
        try {
            const response = await axiosInstance({
                url: `/department/departmentList`,
                method: 'GET',
            });

            const departmentData = response?.data?.data || [];
            console.log('Department Data before dispatch:', departmentData);
            dispatch(setdepartment(departmentData));
            setDepartments(departmentData);

            if (departmentData.length > 0) {
                setActiveTab(departmentData[0]._id);
            }
            console.log('Departments response ===', response.data);
        } catch (error) {
            console.log('Error fetching departments: ', error);
        }
    };

    useEffect(() => {
        fetchDepartments();
    }, []);
    
    useEffect(() => {
        if (departmentses.length > 0) {
            console.log('Departments from Redux state:', departmentses);
        }
    }, [departmentses]);
    

    const fetchDoctorsDetails = async (doctorIds) => {
        try {
            const response = await axiosInstance({
                url: `/doctor/doctorlist`,
                method: 'GET',
            });
            const allDoctors = response?.data?.data || [];
            const filteredDoctors = allDoctors.filter(doctor => doctorIds.includes(doctor._id));
            setDoctors(filteredDoctors);
            console.log('Doctors response ===', response.data);
        } catch (error) {
            console.log('Error fetching doctors: ', error);
        }
    };

    useEffect(() => {
        if (activeTab) {
            const foundDepartment = departments.find(dept => dept._id === activeTab);
            if (foundDepartment) {
                setActiveDepartment(foundDepartment);
                fetchDoctorsDetails(foundDepartment.doctors);
            }
        }
    }, [activeTab, departments]);

    const handleTabChange = (id) => () => setActiveTab(id);

    return (
        <section>
            <div className='container mx-auto px-4 py-8'>
                <div className='flex flex-col items-center pb-12 md:w-1/2'>
                    <h2 id='skills' className='text-start text-lg text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#223C6F]'>
                        Book an appointment for an In-clinic consultation
                    </h2>
                </div>
                <div className='containers'>
                    <div className="flex mb-4 overflow-x-auto lg:overflow-x-visible">
                        <div className='flex mb-4'>
                            {departments.slice(0, 6).map((department) => (
                                <button
                                    key={department._id}
                                    id='skillButton'
                                    className={`activeTab flex-shrink-0 px-6 py-2 text-xs md:text-lg font-semibold rounded-full m-1 md:m-2 h-10 md:h-14 min-w-[100px] md:min-w-[200px] ${activeTab === department._id ? 'bg-[#223C6F] text-white' : 'bg-gray-300 text-[#223C6F]'} focus:outline-none transition-colors duration-200 ease-in-out`}
                                    onClick={handleTabChange(department._id)}
                                >
                                    {department.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='card-container'>
                        {activeTab && activeDepartment && (
                            <div id='dataBox' className='rounded-lg p-6'>
                                <h3 className='text-xl font-semibold mb-4'>Doctors in this department</h3>
                                {doctors.length > 0 ? (
                                    <div className='flex flex-wrap -mx-4'>
                                        {doctors.map((doctor) => (
                                            <div key={doctor._id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4'>
                                                <Link to={`/patient/bookappointment?doctorId=${doctor._id}&doctorName=${encodeURIComponent(doctor.doctorName)}&departmentId=${activeTab}&departmentName=${encodeURIComponent(activeDepartment.name)}`}>
                                                    <div className='bg-gray-200 shadow rounded-lg w-full h-48 flex items-center justify-center'>
                                                        <img
                                                            src={doctor.profilePic}
                                                            alt={doctor.doctorName}
                                                            className='rounded-lg w-full h-full object-contain pt-2'
                                                        />
                                                    </div>

                                                    <div className='overflow-hidden'>
                                                        <div className='p-4'>
                                                            <h4 className='text-lg font-bold text-[#223C6F]'>{doctor.doctorName}</h4>
                                                            <p>{doctor.specialization}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>No doctors available for this department.</p>
                                )}
                            </div>
                        )}
                        <div
                            className={` ${activeTab ? 'container3 hidden md:block bg-[#223C6F] w-full' : 'bg-transparent'} transition-all duration-300`}
                            style={{
                                borderBottom: activeTab ? '1px solid #223C6F' : '1px solid #223C6F',
                                borderTop: activeTab ? '1px solid #223C6F' : 'none',
                            }}
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoctorsListCard;
