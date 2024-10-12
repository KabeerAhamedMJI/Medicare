import { axiosInstance } from "../config/axiosInstance";


export const AdminLogin = async (data) => {
    try {
        const response = await axiosInstance({
            url: '/admin/login',
            method: "POST",
            data,
            withCredentials: true
        });

        return response?.data;
    } catch (error) {
        console.log(error);
    }
};

export const AdminloginOtp = async (data) => {
    try {
        const response = await axiosInstance({
            url: `/admin/loginOtp`,
            method: "POST",
            data,
            withCredentials: true
        });
        return response?.data;
    } catch (error) {
        console.log(error);
    }
};




// export const updatePatient = async (id, updatedData) => {
//     try {
//         console.log('Updating patient with ID:', id);

//         const response = await axiosInstance({
//             url: `/patient/update/${id}`,
//             method: 'PUT',
//             data: updatedData,
//         });

//         console.log('Response data:', response.data);

//         return response?.data;
//     } catch (error) {
//         console.log(error);
//     }
// };


// export const patientLogout = async () => {
//     try {
//         const response = await axiosInstance({
//             url: '/patient/logout',
//             method: "POST",
//             withCredentials: true,
//         });

//         console.log(response);
//         return response?.data;
//     } catch (error) {
//         console.error("Logout failed:", error);
//     }
// };
