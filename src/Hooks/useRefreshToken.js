import React from 'react'
import axios from "../API/axios"
import useAuth from "./useAuth"

const useRefreshToken = () => {
    const {auth, setAuth} = useAuth();

    const refresh = async () => {
        console.log("auth before", auth)
        const res = await axios.post("/user/refresh", {},{
            withCredentials: true
        })
        if(res.data.success){
            console.log("//////")
            const {email, role, uid, accessToken} = res.data;
            setAuth({email, role, uid, accessToken})
            return res.data.accessToken;
        }else {
            console.log("failure")
            setAuth({})
        }
    }
    console.log("auth after",auth)
  return refresh;
}

export default useRefreshToken