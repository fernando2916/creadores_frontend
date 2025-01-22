import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    user: {},
    token: {},
    message: null,
    errorMessage: null,
    loading: false,
  },
  reducers: {

    onChecking: (state) => {
      state.status = 'checking';
      state.user = {};
      state.loading = true
    },

    onRegister: (state, { payload }) => {
      state.status = 'Registrado'
      state.message = payload.message
      state.loading = null

    },
    onRegisterFail: (state, { payload }) => {
      state.status = 'Fallo el registro'
      state.errorMessage = payload.message
      state.loading = null

    },

    onActivate: (state, { payload }) => {
      state.status = 'Activada',
      state.message = payload.message
      state.loading = null

    },

    onActivateFail: (state, { payload }) => {
      state.status = 'activacion nula',
      state.errorMessage = payload.message
      state.loading = null

    },

    onResetCode: (state, {payload}) => {
      state.status = 'correo enviado',
      state.message = payload.message
      state.loading = null

    },

    onResetCodeFail: (state, {payload}) => {
      state.status = 'solicitud Fallida',
      state.errorMessage = payload.message
      state.loading = null
    },

    onResetPassword: (state, {payload}) => {
      state.status = 'correo enviado',
      state.message = payload.message
      state.loading = null

    },

    onResetPasswordFail: (state, {payload}) => {
      state.status = 'Solicitud Fallida',
      state.errorMessage = payload.message
      state.loading = null

    },

    newPassword: (state, {payload}) => {
      state.status = 'Contraseña Actualizada',
      state.message = payload.message
      state.loading = null

    },

    newPasswordFail: (state, {payload}) => {
      state.status = 'Solicitud Fallida',
      state.errorMessage = payload.message
      state.loading = null

    },

    onLogin: ( state, { payload }) => {
      state.status = 'Authenticated',
      state.user = payload.user,
      state.token = payload.token,
      state.message = payload.message
      state.errorMessage = null
      state.loading = false
    },

    onLoginFail: ( state, { payload }) => {
      state.status = 'Credenciales Incorrectas',
      state.user = {},
      state.token = {},
      state.message = null
      state.errorMessage = payload.message
      state.loading = false
    },

    onLogout: ( state) => {
      state.status = 'not-authenticated';
      state.user = {};
      state.token = {};
      state.errorMessage = null;
      state.message = null;
      state.loading = false      
    },

    onLogoutFail: ( state, {payload}) => {
      state.status = 'not-authenticated';
      state.user = {};
      state.token = {};
      state.errorMessage = payload.errorMessage;
      state.message = null;
      state.loading = false 
    },

    clearErrorMessage: (state) => {
      state.message = null;
      state.errorMessage = null;
      state.status = 'not-authenticated'
    }
  },
});

// Action creators are generated for each case reducer function
export const { 
  onChecking, 
  onLogin,
  onLoginFail, 
  onLogoutFail, 
  clearErrorMessage, 
  onRegister,
  onLogout,
  onRegisterFail, 
  onActivate, 
  onActivateFail, 
  onResetCode,
  onResetCodeFail,
  onResetPassword,
  onResetPasswordFail,
  newPassword,
  newPasswordFail,
} = authSlice.actions;
