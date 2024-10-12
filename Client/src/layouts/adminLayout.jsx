import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/admin/adminHeader';
import LeftNav from '../components/admin/leftNav';

const AdminLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            <AdminHeader />
            <div className="flex flex-row flex-grow overflow-hidden">
                <nav className="sticky top-0 h-full bg-white shadow">
                    <LeftNav />
                </nav>
                <main className="flex-grow p-6 bg-gray-50 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
