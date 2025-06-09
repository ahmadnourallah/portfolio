import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContextProvider';

const LogoutPage = () => {
    const { dispatch } = useContext(AuthContext);
    dispatch({ type: 'LOGOUT' });

    return <Navigate to="/" />;
};

export default LogoutPage;
