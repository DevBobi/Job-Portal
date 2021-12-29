import { CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    console.log(user)
    const location = useLocation();
    if (loading) {
        return <CircularProgress />
    }
    if (user?.user?.email) {
        return children;
    }
    return <Navigate to="/jobs" />;

};

export default PrivateRoute;