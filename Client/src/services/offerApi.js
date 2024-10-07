import { axiosInstance } from "../config/axiosInstance"

export const offerList = async () => {
    try {

        const response = await axiosInstance({
            url: `/symtoms/symtomslist`,
            method: "GET",
        })
        return response?.data
    } catch (error) {
        console.log(error)
    }
}