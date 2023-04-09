import {useEffect} from "react"
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const RequireAuth = ({allowedRoles}) => {
    const {auth} = useAuth();
    const location = useLocation();
    console.log(auth)
    console.log(allowedRoles, auth)
    console.log()
    useEffect(()=>{
        console.log("auth", auth)
    }, [])

    
    return (
        allowedRoles?.includes(auth?.role) ? <Outlet /> : auth?.accessToken ? <Navigate to="/" /> :<Navigate to="/signin" state={{from: location}} replace/>
    );
}

export default RequireAuth;