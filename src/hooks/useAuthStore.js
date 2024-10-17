import creadoresApi from "@/api/creadoresApi";
import { useDispatch, useSelector } from "react-redux";

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
    try {
      const { data } = await creadoresApi.post(`/auth/verify/${id}`, {
        verification_code,
      });
      dispatch(onActivate(data));
    } catch (error) {
      dispatch(onActivateFail(error.response.data));
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
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin(data));
    } catch (error) {
      dispatch(onLoginFail(error.response.data || "--"));
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
    }
  };

  const me = async () => {
    try {
      const resp = await creadoresApi.post("/auth/me");
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  const refresh_token = async () => {
    dispatch(onChecking());
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());

    try {
      const { data } = await creadoresApi.get("/auth/refresh");
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin(data));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout(error.response.data));
    }
  };

  const startLogout = async () => {
    localStorage.clear();
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

    //* Métodoa
    startLogin,
    startRegister,
    verify,
    reset_code,
    reset_password,
    new_password,
    me,
    refresh_token,
    startLogout,
  };
};
