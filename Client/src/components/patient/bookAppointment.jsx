import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import Appointments from '../../assets/images/Static Images/appointment.jpg';
import { bookAppointment } from "../../services/appointmentApti";
import { useSelector, useDispatch } from "react-redux"; 

const BookAppointment = () => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const doctorId = queryParams.get('doctorId');
    const departmentId = queryParams.get('departmentId');
    const departmentName = queryParams.get('departmentName');
    const dispatch = useDispatch(); 

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const patient = useSelector((state) => state.patient.patient);
    const department = useSelector((state) => state.department.department);

    const onSubmit = async (data) => {
        setLoading(true);
    
        const appointmentData = {
            ...data,
            departmentId: departmentId || department._id || data.departmentId, 
            doctorId: doctorId || data.doctorId 
        };
    
        console.log("Appointment Data:", appointmentData); 
    
        try {
            const response = await bookAppointment(appointmentData, patient._id, department._Id,);
            if (!response) {
                toast.error('Failed to book appointment!');
            } else {
                toast.success('Appointment booked successfully!');
            }
        } catch (error) {
            console.log(error);
            toast.error('Slot not available!');
        }
        setLoading(false);
    };
    
    const handleErrors = (errors) => {
        if (errors.appointmentDate) {
            toast.error("Appointment date is required!");
        }
        if (errors.time) {
            toast.error("Preferred time is required!");
        }
    };

    return (
        <section className="flex items-center justify-center py-5">
            <div className="container w-full md:flex bg-white rounded-xl shadow-lg border">
                <div className="md:w-5/12 p-12">
                    <div className="md:border-r-2 pr-12">
                        <h2 className="text-xl font-bold text-center mb-4 text-blue-900">Book Appointment</h2>
                        <form onSubmit={handleSubmit(onSubmit, handleErrors)} className="space-y-3">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-blue-800 text-sm">Department</span>
                                    </label>
                                    <div>
                                        {departmentId ? (
                                            <div className="p-3 rounded-lg bg-gray-200 text-blue-900">
                                                {departmentName}
                                            </div>
                                        ) : (
                                            <select
                                                {...register("departmentId")}
                                                className="w-full p-3 rounded-lg shadow-sm bg-white text-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            >
                                                <option value="" disabled>Select Department</option>
                                                {department.length > 0 ? (
                                                    department.map((dept) => (
                                                        <option key={dept._id} value={dept._id}>
                                                            {dept.name}
                                                        </option>
                                                    ))
                                                ) : (
                                                    <option disabled>No Departments Available</option>
                                                )}
                                            </select>
                                        )}
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-blue-800 text-sm">Contact Number</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("phoneNumber")}
                                        defaultValue={patient.phoneNumber} 
                                        className="w-full p-3 rounded-lg shadow-sm bg-gray-200 text-sm border border-gray-300 cursor-not-allowed"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-blue-800 text-sm">Appointment Date</span>
                                    </label>
                                    <input
                                        type="date"
                                        {...register("appointmentDate")}
                                        className={`w-full p-3 rounded-lg shadow-sm bg-white text-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.appointmentDate ? 'border-red-500' : ''}`}
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-blue-800 text-sm">Preferred Time</span>
                                    </label>
                                    <input
                                        type="time"
                                        {...register("time")}
                                        className={`w-full p-3 rounded-lg shadow-sm bg-white text-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.time ? 'border-red-500' : ''}`}
                                    />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-blue-800 text-sm">Description</span>
                                </label>
                                <textarea
                                    {...register("description")}
                                    placeholder="Tell us your symptom or health problem"
                                    className="w-full p-3 rounded-lg shadow-sm bg-white text-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                ></textarea>
                            </div>

                            <div className="form-control mt-3">
                                <button
                                    type="submit"
                                    className="w-full p-3 text-white bg-blue-900 rounded-lg shadow-sm hover:bg-blue-800 transition-colors"
                                >
                                    {loading ? (
                                        <span className="loading loading-ring loading-sm"></span>
                                    ) : (
                                        "Book Appointment"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="hidden md:flex flex-1 justify-center items-center p-6">
                    <img
                        className="w-full h-auto max-w-md object-cover rounded-r-xl"
                        src={Appointments}
                        alt="Hospital"
                    />
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;
