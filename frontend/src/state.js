import Cookies from 'js-cookie';
import { reactive } from 'vue';

// Cargar datos desde la cookie, si existen
const datosGuardados = JSON.parse(Cookies.get('datos') || '{}');

export const state = reactive({
  datos: {
    entrarChat: datosGuardados.entrarChat || '',
    id: datosGuardados.id || '',
  },
});

export const guardarDatos = (nuevosDatos) => {
  Object.assign(state.datos, nuevosDatos);
  // Guardar en cookie
  Cookies.set('datos', JSON.stringify(state.datos), { expires: 7 }); // La cookie expira en 7 días
};
