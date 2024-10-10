import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/admin/adminHeader';
import AdminFooter from '../components/admin/adminFooter';


const AdminLayout = () => {
    return (
        <div>
            <AdminHeader />
            <Outlet />
            <AdminFooter />
        </div>
    );
};

export default AdminLayout;

