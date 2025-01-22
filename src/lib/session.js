'use client'

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useAuthStore } from "@/hooks/useAuthStore";


export const UseAuthInitializer = () => {
    
  const { refresh_token } = useAuthStore();
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( refresh_token());
  }, []);
};