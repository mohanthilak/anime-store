import {useEffect} from "react"
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const RequireAuth = ({allowedRoles}) => {
    const {auth} = useAuth();
    const location = useLocation();

    
    return (
        allowedRoles?.includes(auth?.role) ? <Outlet /> : auth?.accessToken ? auth?.role === "user"?<Navigate to="/home" />:<Navigate to="/" /> :<Navigate to="/signin" state={{from: location}} replace/>
    );
}

export default RequireAuth;