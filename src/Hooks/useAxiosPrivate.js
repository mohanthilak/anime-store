import React, {useEffect} from 'react'
import { axiosPrivate } from '../API/axios'
import useRefreshToken from './useRefreshToken'
import useAuth from './useAuth'

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const {auth} = useAuth();
  
  useEffect(()=>{

    const requestInterceptor = axiosPrivate.interceptors.request.use(
        config => {
            if(!config.headers['Authorization']){
                console.log("No headers in the request")
                config.headers['Authorization'] = `Bearer ${auth.accessToken}`
            }
            return config;
        }, (e) => Promise.reject(error)
    )

    const responseInterceptor = axiosPrivate.interceptors.response.use(
        response => response,
        async(e) =>{
            const prevRequest = e?.config;
            console.log("error while receiving response")
            if(e?.response?.status === 403 && !prevRequest?.sent) {
                prevRequest.sent = true;
                const newAccessToken = await refresh();
                prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return axiosPrivate(prevRequest);
            }
            return Promise.reject(e);
        }
    )
    return ()=> {
        axiosPrivate.interceptors.response.eject(responseInterceptor)
        axiosPrivate.interceptors.request.eject(requestInterceptor)
    }
  }, [auth, refresh])

  return axiosPrivate;  
  
}

export default useAxiosPrivate