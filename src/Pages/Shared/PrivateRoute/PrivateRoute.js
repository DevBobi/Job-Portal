import { CircularProgress } from '@mui/material';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <CircularProgress />
    }
    if (user?.user?.email) {
        return children;
    }
    return <Navigate to="/jobs" />;

};

export default PrivateRoute;