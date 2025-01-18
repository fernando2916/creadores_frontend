import creadoresApi from '@/api/creadoresApi';
import { useDispatch, useSelector } from 'react-redux';

import { onCheckingJobs, onJobs } from '@/store'


export const useJobsStore = () => {

    const {vacantes, cargando, isData } = useSelector( 
        (state) => state.trabajo
    );
    const dispatch = useDispatch();

    const viewJobs = async () => {
        dispatch(onCheckingJobs());

        try {
            const { data } = await creadoresApi.get("/vacante");
            dispatch(onJobs(data))
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

  return {
     //* Propiedades
     vacantes,
     cargando,
     isData,
     //* Métodos
     viewJobs,
  }
}
