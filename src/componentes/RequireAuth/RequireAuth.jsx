import { useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useRefreshToken from "../../Hooks/useRefreshToken";

const RequireAuth = () => {
    const refresh = useRefreshToken();
    const {auth} = useAuth();
    const location = useLocation();

    useEffect(async()=>{
        if(!auth?.uid) await refresh()
    },[])

    return (
        auth?.uid ? <Outlet /> : <Navigate to="/signin" state={{from: location}} replace/>
    );
}

export default RequireAuth;