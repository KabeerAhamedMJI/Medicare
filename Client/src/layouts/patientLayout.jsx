import React from 'react';
import PatientHeader from '../components/patient/patientHeader';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

const patientLayout = () => {
    return (
        <div>
            <PatientHeader/>
            <Outlet />
            <Footer />
        </div>
    );
};

export default patientLayout;