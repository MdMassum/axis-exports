import React from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow p-6 bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
