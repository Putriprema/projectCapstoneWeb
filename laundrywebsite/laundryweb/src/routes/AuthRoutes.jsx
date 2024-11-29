import { Navigate, Outlet } from 'react-router-dom';

const AuthRoutes = ({ isLoggin }) => {
    return isLoggin ? <Outlet /> : <Navigate to="/login-options" replace/>;
};

export default AuthRoutes;