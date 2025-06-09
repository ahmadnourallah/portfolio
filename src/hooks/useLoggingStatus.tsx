import { AuthContext } from '../context/AuthContextProvider';
import { useContext, useState, useEffect } from 'react';

const useLoggingStatus = () => {
    const { user } = useContext(AuthContext);
    return Object.keys(user).length > 0;
};

export default useLoggingStatus;
