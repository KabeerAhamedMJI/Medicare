import { axiosInstance } from "../config/axiosInstance";

export const userCreate = async (data) => {
    try {
        const response = await axiosInstance({
            url: `/patient/create`,
            method: "POST",
            data,
            withCredentials: true
        });
        return response?.data;
    } catch (error) {
        console.log(error);
    }
};

export const signUpOtp = async (data) => {
    try {
        const response = await axiosInstance({
            url: `/patient/signUpOtp`,
            method: "POST",
            data,
            withCredentials: true
        });
        return response?.data;
    } catch (error) {
        console.log(error);
    }
};

export const userLogin = async (data) => {
    try {
        const response = await axiosInstance({
            url: '/patient/login',  // Use the relative URL for consistency
            method: "POST",
            data,
            withCredentials: true
        });

        return response?.data;
    } catch (error) {
        console.log(error);
    }
};

export const loginOtp = async (data) => {
    try {
        const response = await axiosInstance({
            url: `/patient/loginOtp`,
            method: "POST",
            data,
            withCredentials: true
        });
        return response?.data;
    } catch (error) {
        console.log(error);
    }
};

// Uncomment this function if you need to use it
// export const getAPatient = async () => {
//     try {
//         const response = await axiosInstance({
//             url: `/patient/profile`,
//             method: 'GET',
//             withCredentials: true,
//         });
//         console.log(response, '====response');
//         return response?.data;
//     } catch (error) {
//         console.log(error);
//     }
// };

export const updatePatient = async (id, updatedData) => {
    try {
        console.log('Updating patient with ID:', id);

        const response = await axiosInstance({
            url: `/patient/update/${id}`,
            method: 'PUT',
            data: updatedData,
        });

        console.log('Response data:', response.data);

        return response?.data;
    } catch (error) {
        console.log(error);
    }
};

// Uncomment this function if you need to use it
// export const patientCheck = async () => {
//     try {
//         const response = await axiosInstance({
//             url: `/patient/check-Patient`,
//             method: 'GET',
//         });
//         return response?.data;
//     } catch (error) {
//         console.log(error);
//     }
// };

export const patientLogout = async () => {
    try {
        const response = await axiosInstance({
            url: '/patient/logout',
            method: "POST",
            withCredentials: true,
        });

        console.log(response);
        return response?.data;
    } catch (error) {
        console.error("Logout failed:", error);
    }
};
