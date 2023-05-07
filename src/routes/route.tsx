import React, { useContext } from 'react';
import { AuthContext, AuthType } from '../contexts/authContext';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactNode;
    priv: boolean;
}

const ProtectedRoute : React.FC<ProtectedRouteProps> = ({ children, priv }) => {
    const { userData } = useContext(AuthContext) as AuthType;

    if (!!userData.email === priv) {
        // eslint-disable-next-line react/jsx-no-useless-fragment
        return (<>{children}</>);
    }

    return (
        <Navigate to={{pathname: (priv ? "/login" : "/")}} />
    );
};

export default ProtectedRoute;