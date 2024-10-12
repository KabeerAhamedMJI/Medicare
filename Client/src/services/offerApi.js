import { axiosInstance } from "../config/axiosInstance"

export const getAllOffers = async () => {
    try {

        const response = await axiosInstance({
            url: `/offer/offerlist`,
            method: "GET",
            withCredentials: true
        })
        return response?.data
    } catch (error) {
        console.log(error)
    }
}
