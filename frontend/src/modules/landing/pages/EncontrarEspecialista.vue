<template>
  <div class="w-screen h-screen absolute bg-[#FFEEE5] flex flex-col items-center">
    <div class="mt-4 text-center flex flex-col items-center xl:flex-row xl:items-center md:ml-24 xl:mr-64 xl:space-x-8 pt-12 xl:pr-32">
      <div>
        <h1 class="text-5xl sm:w-[500px] md:w-[640px] text-stone-500 xl:pl-20">
          Encuentra tu especialista y pide tu cita
        </h1>
        <p class="text-xl mt-6 text-stone-500 mx-4">
          Decide de qué manera te gustaría agendar tu cita
          <br>
          Una vez hayas seleccionado los filtros no olvides dar click
          en el botón de 'Buscar'
        </p>
      </div>
    </div>

    <div class="flex flex-col md:ml-24 bg-[#FFEEE5] w-screen pb-6 items-center pt-1 md:mt-1 xl:mr-80">
      <div class="flex flex-wrap justify-center pt-16 md:pt-20 xl:pt-24">
        <div class="flex justify-center w-screen absolute space-x-3 md:space-x-12 xl:space-x-16">
          <button @click="toggleMode('Presencial')" :class="selectedModes.includes('Presencial') ? 'bg-red-200' : 'bg-[#E6836D]'" class="hover:bg-red-200 rounded-lg text-white p-2 flex items-center">
            Cita Presencial
            <input type="checkbox" v-model="selectedModes" value="Presencial" class="ml-2 custom-checkbox">
          </button>
          <button @click="toggleMode('En línea')" :class="selectedModes.includes('En línea') ? 'bg-red-200' : 'bg-[#E6836D]'" class="hover:bg-red-200 rounded-lg text-white p-2 flex items-center">
            Cita En línea
            <input type="checkbox" v-model="selectedModes" value="En línea" class="ml-2 custom-checkbox">
          </button>
          <button @click="openModal('especialidad')" class="bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-2 flex items-center">
            Por Especilidad
          </button>
          <button @click="openModal('ubicacion')" class="bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-2 flex items-center">
            Por Ubicación
          </button>
        </div>
      </div>
      <div class="flex flex-wrap justify-center w-full pt-32">
        <div class="flex justify-center w-screen absolute space-x-4 md:space-x-12 xl:space-x-48">
          <button @click="buscarEspecialistas" class="bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-3 flex items-center">
            Buscar <IconoBusqueda class="ml-3" />
          </button>
        </div>
      </div>
    </div>

    <div v-if="resultados.length > 0" class="mt-10 xl:pr-48 w-full px-4 overflow-x-auto sm:pl-32 md:pl-48 lg:pl-64">
      <table class="table-auto border-collapse border border-red-400 ">
        <thead>
          <tr>
            <th class="border border-red-300 p-2">Nombre</th>
            <th class="border border-red-300 p-2">Apellido</th>
            <th class="border border-red-300 p-2">Título</th>
            <th class="border border-red-300 p-2">Número</th>
            <th class="border border-red-300 p-2">Correo</th>
            <th class="border border-red-300 p-2">Modalidad</th>
            <th class="border border-red-300 p-2">Ubicación</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="especialista in resultados" :key="especialista.id_especialista">
            <td class="border border-red-300 p-2">{{ especialista.Nombre }}</td>
            <td class="border border-red-300 p-2">{{ especialista.Apellido }}</td>
            <td class="border border-red-300 p-2">{{ especialista.Titulo }}</td>
            <td class="border border-red-300 p-2">{{ especialista.Numero }}</td>
            <td class="border border-red-300 p-2">{{ especialista.Correo }}</td>
            <td class="border border-red-300 p-2">{{ especialista.Modalidad }}</td>
            <td class="border border-red-300 p-2">{{ especialista.Ubicacion }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div v-if="modal === 'especialidad'" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg p-6 w-3/4 max-w-md">
      <h2 class="text-xl font-bold mb-4">Especialidad buscada</h2>
      <ul>
        <li v-for="especialidad in especialidades" :key="especialidad" class="hover:bg-red-100 p-2">
          <label>
            <input type="radio" v-model="selectedEspecialidad" :value="especialidad" />
            {{ especialidad }}
          </label>
        </li>
      </ul>
      <button @click="closeModal" class="mt-4 bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-4">
        Cerrar
      </button>
    </div>
  </div>

  <div v-if="modal === 'ubicacion'" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg p-6 w-3/4 max-w-md">
      <h2 class="text-xl font-bold mb-4">Ubicación</h2>
      <ul>
        <li class="hover:bg-red-100 p-2"><a>Item 1</a></li>
        <li class="hover:bg-red-100 p-2"><a>Item 2</a></li>
      </ul>
      <button @click="closeModal" class="mt-4 bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-4">
        Cerrar
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IconoBusqueda from '@/assets/icons/ComponentsIcons/IconoBusqueda.vue';
import IconoMapa from '@/assets/icons/ComponentsIcons/IconoMapa.vue';
import IconoEspecialidad from '@/assets/icons/ComponentsIcons/IconoEspecialidad.vue';
import IconoCamara from '@/assets/icons/ComponentsIcons/IconoCamara.vue';
import IconoOffice from '@/assets/icons/ComponentsIcons/IconoOffice.vue';

const modal = ref<string | null>(null);
const selectedModes = ref<string[]>([]);
const selectedEspecialidad = ref<string | null>(null);
const resultados = ref<any[]>([]);

const especialidades = [
  'Psicólogo',
  'Psicoterapeuta',
  'Psiquiatra',
  'Consejero',
  'Terapeuta de pareja',
  'Terapeuta familiar',
  'Terapeuta infantil',
  'Neuropsicólogo'
];

const especialistas = [
  { id_especialista: 1, Nombre: 'Juan', Apellido: 'Perez', Titulo: 'Psicólogo', Numero: '1234567890', Correo: 'juan@example.com', Modalidad: 'Presencial', Ubicacion: 'Ciudad A' },
  { id_especialista: 2, Nombre: 'Ana', Apellido: 'Gomez', Titulo: 'Psiquiatra', Numero: '0987654321', Correo: 'ana@example.com', Modalidad: 'En línea', Ubicacion: 'Ciudad B' },
  // Agrega más especialistas según sea necesario
];

const openModal = (type: string) => {
  modal.value = type;
};

const closeModal = () => {
  modal.value = null;
};

const toggleMode = (mode: string) => {
  const index = selectedModes.value.indexOf(mode);
  if (index === -1) {
    selectedModes.value.push(mode);
  } else {
    selectedModes.value.splice(index, 1);
  }
};

const buscarEspecialistas = () => {
  resultados.value = especialistas.filter(especialista => {
    return (selectedModes.value.length === 0 || selectedModes.value.includes(especialista.Modalidad)) &&
           (!selectedEspecialidad.value || especialista.Titulo === selectedEspecialidad.value);
  });
};
</script>

<style scoped>
button input[type="checkbox"] {
  margin-left: 8px;
}
</style>
