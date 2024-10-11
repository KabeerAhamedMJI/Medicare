import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/admin/adminHeader';
import LeftNav from '../components/admin/leftNav';

const AdminLayout = () => {
    return (
        <div>
            <AdminHeader />
            <div className="flex flex-row flex-grow">
                <nav >
                    <LeftNav />
                </nav>
                <main className="flex-grow p-6 bg-gray-50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
