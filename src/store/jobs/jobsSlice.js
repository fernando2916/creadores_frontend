import { createSlice } from '@reduxjs/toolkit';

export const jobsSlice = createSlice({
  name: 'trabajo',
  initialState: {
    vacantes: {},
    cargando: false,
    isData: false
  },
  reducers: {
    onCheckingJobs: (state) => {
      state.vacantes = {};
      state.cargando = true;
    },

    onJobs: (state, {payload}) => {
      state.vacantes = payload.data;
      state.cargando = false;
      state.isData = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onCheckingJobs, onJobs } = jobsSlice.actions;