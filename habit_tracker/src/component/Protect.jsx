import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ element}) => {
    const { token } = useContext(AuthContext);

    return (
             element
    );
};

export default ProtectedRoute;