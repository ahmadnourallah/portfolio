import { toast } from 'react-toastify';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useLoggingStatus from '../../hooks/useLoggingStatus';

const UnAuthGuard = () => {
    const isLoggedIn = useLoggingStatus();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            toast.error("You're already logged in!");
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    return !isLoggedIn ? <Outlet /> : <></>;
};

export default UnAuthGuard;
