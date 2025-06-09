import type { ReactNode } from 'react';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import useLoggingStatus from '../../hooks/useLoggingStatus';

const AuthGuard = ({ component }: { component: ReactNode }) => {
    const isLoggedIn = useLoggingStatus();

    if (!isLoggedIn) {
        toast.error("You're not logged in!");
        return <Navigate to="/login" />;
    }

    return <>{component}</>;
};

export default AuthGuard;
