import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../config/axiosInstance';
import { useLocation, useNavigate } from 'react-router-dom';

const AdminProtect = ({ children }) => {
    const location = useLocation();
    const [admin, setAdmin] = useState(false);
    const navigate = useNavigate();

    const adminCheck = async () => {
        try {
            const response = await axiosInstance({
                url: 'admin/check-admin',
                method: 'GET',
                withCredentials: true,
            });
            setAdmin(true);
            console.log(response, "====response");
        } catch (error) {
            navigate('/login/admin');
            console.log(error);
        }
    };

    useEffect(() => {
       adminCheck();
    }, [location.pathname]);

    return admin ? children : null;
};

export default AdminProtect;
