import creadoresApi from "@/api/creadoresApi";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

import {
  onRegister,
  clearErrorMessage,
  onLogin,
  onLogout,
  onChecking,
  onActivate,
  onActivateFail,
  onResetCode,
  onResetCodeFail,
  onResetPassword,
  onResetPasswordFail,
  newPassword,
  newPasswordFail,
  onRegisterFail,
  onLoginFail,
} from "@/store"; 
import { createAsyncThunk } from "@reduxjs/toolkit";


export const useAuthStore = () => {
  const { status, user, errorMessage, message, loading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const startRegister = async ({
    name,
    last_name,
    email,
    password,
    password_confirmation,
  }) => {
    dispatch(onChecking());
    try {
      const { data } = await creadoresApi.post("/auth/register", {
        name,
        last_name,
        email,
        password,
        password_confirmation,
      });
      dispatch(onRegister(data));
    } catch (error) {
      dispatch(onRegisterFail(error.response.data));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 1000);
    }
  };

  const verify = async ({ id, verification_code }) => {
    dispatch(onChecking());
    try {
      const { data } = await creadoresApi.post(`/auth/verify/${id}`, {
        verification_code,
      });
      dispatch(onActivate(data));
    } catch (error) {
      dispatch(onActivateFail(error.response.data));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 5000);
    }
  };

  const reset_code = async ({ email }) => {
    dispatch(onChecking());

    try {
      const { data } = await creadoresApi.post(
        "/auth/reset-verification-code",
        { email }
      );
      dispatch(onResetCode(data));
    } catch (error) {
      dispatch(onResetCodeFail(error.response.data));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 5000);
    }
  };

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());

    try {
      const { data } = await creadoresApi.post("/auth/login", {
        email,
        password,
      });

      const {token} = data;
      Cookies.set('accessToken', token, {
        expires: 15,
        path: '/',
        // secure: true,
        sameSite: 'Strict',
      }) 
      dispatch(onLogin(data));

    } catch (error) {
      
      dispatch(onLoginFail(error.response?.data || "--"));
    }
  };

  const reset_password = async ({ email }) => {
    dispatch(onChecking());

    try {
      const { data } = await creadoresApi.post("/auth/reset-password", {
        email,
      });
      dispatch(onResetPassword(data));

    } catch (error) {
      
      dispatch(onResetPasswordFail(error.response.data));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 5000);
    }
  };

  const new_password = async ({ password, password_confirmation, id }) => {
    dispatch(onChecking());
    try {
      const { data } = await creadoresApi.post(`/auth/new-password/${id}`, {
        password,
        password_confirmation,
      });
      dispatch(newPassword(data));
    } catch (error) {
      dispatch(newPasswordFail(error.response.data));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 5000);
    }
  };

  // const me = createAsyncThunk(
  //   '/auth/me',
  //   async(_, { rejectedWithValue}) => {
  //   dispatch(onChecking());
    
  //   const token = Cookies.get("accessToken");
  //     if (!token) {
  //       dispatch(onLogout());
  //       return rejectedWithValue("No token found");
  //     }

  //   try {
  //     const {data} = await creadoresApi.get("/auth/me");
  //     dispatch(onLogin(data))
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(onLogout())


  //     return rejectedWithValue(error.response?.data.message || 'Something went wrong' )
  //   }
  // });

  // const refresh_token = async () => {

  //   dispatch(onChecking());

  //   const token = Cookies.get("accessToken");
  //   if (!token) return dispatch(onLogout());

  //   try {
  //     const { data } = await creadoresApi.get("/auth/refresh");

  //     Cookies.set('accessToken', data.token,  {
  //     expires: 1,
  //       // secure:  true,
  //       sameSite: 'Strict',
  //     })

  //     dispatch(onLogin(data));
  //   } catch (error) {
     
  //     Cookies.remove('accessToken');
  //     dispatch(onLogout(error.response.data));
  //   }
  // };

  const refresh_token = createAsyncThunk(
    'auth/refreshToken',
    async (_, {dispatch, isRejectedWithValue}) => {
      dispatch(onChecking());

      const token = Cookies.get("accessToken");
      if (!token) {
        dispatch(onLogout());
        return isRejectedWithValue("No token found");
      }

      try {
        const { data } = await creadoresApi.get('/auth/refresh');
        
        Cookies.set("accessToken", data.token, {
          expires: 15,
          sameSite: "Strict",
        })

        dispatch(onLogin(data))
      } catch (error) {
        Cookies.remove("accessToken");
        dispatch(onLogout(error.response.data || "Error refreshing token"));
        return isRejectedWithValue(error.response.data || "Error refreshing token");
      }
    });

  const startLogout = async () => {
   
    Cookies.remove('accessToken');
    dispatch(onLogout(null));
    setTimeout(() => {
      dispatch(clearErrorMessage());
    }, 1000);
  };



  return {
    //* Propiedades
    status,
    user,
    errorMessage,
    message,
    onLogout,
    onChecking,
    loading,
    
    //* Métodos
    startLogin,
    startRegister,
    verify,
    reset_code,
    reset_password,
    new_password,
    refresh_token,
    startLogout,
    
  };
};
