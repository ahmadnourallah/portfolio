import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLoggingStatus from '../../hooks/useLoggingStatus';

const UnAuthGuard = ({ component }: { component: ReactNode }) => {
    const isLoggedIn = useLoggingStatus();

    if (isLoggedIn) {
        toast.warning("You're already logged in!");
        return <Navigate to="/" />;
    }

    return <>{component}</>;
};

export default UnAuthGuard;
