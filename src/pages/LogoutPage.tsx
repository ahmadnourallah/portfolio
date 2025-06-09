import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextProvider';

const LogoutPage = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    dispatch({ type: 'LOGOUT' });

    navigate('/');

    return <></>;
};

export default LogoutPage;
