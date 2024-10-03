import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setappointment } from '../../redux/features/appointmentSlice'; 
import { axiosInstance } from '../../config/axiosInstance';

const AppointmentCard = () => {
    const dispatch = useDispatch();

    const patient = useSelector((state) => state.patient.patient);
    const patientId = patient?._id; 

    const appointments = useSelector((state) => state.appointment.appointment);

    console.log(appointments)

    const fetchAppointment = async () => {
        try {
            const response = await axiosInstance({
                url: `/appointment/appointments/${patientId}`, 
                method: 'GET',
                withCredentials: true, 
            });
            dispatch(setappointment(response?.data?.data));
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    }

    useEffect(() => {
        if (patientId) {
            fetchAppointment();
        }
    }, [patientId]);

    return (
        <div className="flex flex-col gap-6">
            {appointments && appointments.length > 0 ? (
                appointments.map((appointment) => {
                    const status = appointment?.status;
                    const doctorName = appointment?.doctor?.doctorName || 'Not Selected';
                    const doctorProfileImage = appointment?.doctor?.profilePic || 'data:image/png;base64,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';
                    const department = appointment?.department?.name || 'Department';
                    const appointmentDate = new Date(appointment?.appointmentDate).toLocaleDateString() || '20/10/2024';
                    const appointmentTime = appointment?.time || '00.00 AM';

                    return (
                        <div key={appointment?._id} className="flex flex-col md:flex-row justify-between items-center border-2 border-gray-300 rounded-2xl p-6 mt-8 bg-white shadow-md">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                                <div className="flex items-center space-x-4 sm:space-x-6">
                                    <img
                                        src={doctorProfileImage}
                                        alt="Profile"
                                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-fit bg-white border-2 border-gray-300"
                                    />
                                    <div className="flex flex-col justify-center">
                                        <h3 className="text-lg md:text-xl font-bold text-gray-800">{doctorName}</h3>
                                        <span className="text-sm md:text-base text-gray-500">
                                            {department} Department
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
                                    <span className="block text-sm md:text-base text-gray-600"><span className='font-bold'>Date:</span> {appointmentDate}</span>
                                    <span className="block text-sm md:text-base text-gray-600"><span className='font-bold'>Time:</span> {appointmentTime}</span>
                                </div>
                            </div>

                            <div className="mt-6 md:mt-0">
                                <button
                                    className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 ${status === "cancelled"
                                        ? "bg-red-500 hover:bg-red-600 text-white"
                                        : status === "completed"
                                            ? "bg-gray-500 hover:bg-gray-600 text-white"
                                            : "bg-green-500 hover:bg-green-600 text-white"
                                        }`}
                                >
                                    <span className="material-symbols-outlined mr-2">
                                        {status === "cancelled"
                                            ? "cancel"
                                            : status === "completed"
                                                ? "check_circle"
                                                : "radio_button_checked"}
                                    </span>
                                    <span className="text-sm md:text-base">
                                        {status === "cancelled"
                                            ? "Cancelled"
                                            : status === "completed"
                                                ? "Completed"
                                                : "Active"}
                                    </span>
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>You don't have any appointment yet..</p>
            )}
        </div>
    );
}

export default AppointmentCard;
