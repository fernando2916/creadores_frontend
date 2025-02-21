'use client'

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useAuthStore } from "@/hooks/useAuthStore";
import Cookies from "js-cookie";


export const UseAuthInitializer = () => {
  
   const { refresh_token} = useAuthStore();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const token = Cookies.get('accessToken')
    
    if(token) {
      dispatch(refresh_token())}
  
    }, []);
};