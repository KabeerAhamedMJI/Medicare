import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../config/axiosInstance';
import { useLocation, useNavigate } from 'react-router-dom';

const PatientProtect = ({ children }) => {
    const location = useLocation();
    const [patient, setPatient] = useState(false);
    const navigate = useNavigate();

    const patientCheck = async () => {
        try {
            const response = await axiosInstance({
                url: '/patient/check-Patient',
                method: 'GET',
                withCredentials: true,
            });
            setPatient(true);
            console.log(response, "====response");
        } catch (error) {
            navigate('/patientLoginpage');
            console.log(error);
        }
    };

    useEffect(() => {
        patientCheck();
    }, [location.pathname]);

    return patient ? children : null;
};

export default PatientProtect;
