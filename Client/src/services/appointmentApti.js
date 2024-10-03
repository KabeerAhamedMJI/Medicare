import { axiosInstance } from "../config/axiosInstance";


export const bookAppointment = async (data, patientId, DoctorId, DepartmentId) => {
    try {

        const requestData = { ...data, patientId, DepartmentId, DoctorId };

        const response = await axiosInstance({
            url: `/appointment/bookAppointment`,
            method: "POST",
            data: requestData,
            withCredentials: true
        });
        return response?.data;
        
    } catch (error) {
        console.error('Error booking appointment:', error);
    }
};

// export const getAppointments = async (patientId) => {
//     try {
//         const response = await axiosInstance({
//             url: `/appointment/appointments/${patientId}`, 
//             method: 'GET',
//             withCredentials: true, 
//         });
//         return response?.data; 
//     } catch (error) {
//         console.error('Failed to fetch Appointment:', error.message);
//         return { success: false, message: error.response?.data?.message || 'Something went wrong' };
//     }
// };

export default axiosInstance;