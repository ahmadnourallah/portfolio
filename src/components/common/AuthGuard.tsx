import { toast } from 'react-toastify';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useLoggingStatus from '../../hooks/useLoggingStatus';

const AuthGuard = () => {
    const isLoggedIn = useLoggingStatus();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            toast.error("You're not logged in!");
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    return isLoggedIn ? <Outlet /> : <></>;
};

export default AuthGuard;
