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


export const getAllAppointments = async () => {

    try {
        const response = await axiosInstance({
            url: `/appointment/appointmentlist`,
            method: "GET",
            withCredentials: true
        })
        return response?.data;
    } catch (error) {
        console.error('Error fetching appointments:', error);
    }
}

export const updatingAppointment = async (id, data) => {
    try {
        const response = await axiosInstance({
            url: `/appointment/updateAppointment/${id}`,  
            method: "PUT",
            data: data, 
            withCredentials: true
        });
        return response?.data; 
    } catch (error) {
        console.error('Error updating appointment:', error);
    }
};

export default axiosInstance;