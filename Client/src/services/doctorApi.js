import { axiosInstance } from "../config/axiosInstance"

export const departmentList = async () => {
    try {

        const response = await axiosInstance({
            url: `/department/departmentList`,
            method: "GET",
        })
        return response?.data
    } catch (error) {
        console.log(error)
    }
}