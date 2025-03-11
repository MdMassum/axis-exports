import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute= () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return currentUser ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
