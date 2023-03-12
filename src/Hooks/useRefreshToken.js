import React from "react";
import axios from "../API/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  const refresh = async () => {
    const res = await axios.post(
      "/user/refresh",
      {},
      {
        withCredentials: true,
      }
    );
    if (res.data.success) {
      const { email, role, uid, accessToken } = res.data;
      const payload = { email, role, uid, accessToken };
      setAuth(payload);
      return res.data.accessToken;
    } else {
      setAuth({});
    }
  };
  return refresh;
};

export default useRefreshToken;
