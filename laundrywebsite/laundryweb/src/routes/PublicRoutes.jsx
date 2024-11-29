import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = ({ isLoggin }) => {
    return isLoggin ? <Navigate to="/home" replace /> : <Outlet />;
};

export default PublicRoutes;
