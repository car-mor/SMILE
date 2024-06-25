<template>
  <div class="w-screen h-screen absolute bg-[#FFEEE5] flex flex-col items-center">
    <div
      class="mt-4 text-center flex flex-col items-center xl:flex-row xl:items-center md:ml-24 xl:mr-64 xl:space-x-8 pt-12 xl:pr-32"
    >
      <div>
        <h1 class="text-5xl sm:w-[500px] md:w-[640px] text-stone-500">
          Encuentra tu especialista y pide tu cita
        </h1>
        <p class="text-xl mt-6 text-stone-500 mx-4">
          Decide de que manera te gustaría agendar tu cita
          <br>
          Una vez hayas seleccionado los filtros no olvides dar click
          en el botón de 'Buscar'
        </p>
      </div>
    </div>

    <div
      class="flex flex-col md:ml-24 bg-[#FFEEE5] w-screen pb-6 items-center pt-1 md:mt-1 xl:mr-80"
    >
      <div class="flex flex-wrap justify-center pt-16 md:pt-20 xl:pt-24">
        <div class="flex justify-center w-screen absolute space-x-3 md:space-x-12 xl:space-x-16">
          <button
            class="bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-2 flex items-center"
          >
            <IconoOffice class="mr-2" />Cita Presencial
          </button>
          <button
            class="bg-[#E6836D] hover:bg-red-200 rounded-lg pl-5 text-white p-2 flex items-center"
          >
            <IconoCamara class="mr-2 w-6" /> Cita En línea
          </button>
          <button
            @click="openModal('especialidad')"
            class="bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-2 flex items-center"
          >
            <IconoEspecialidad class="ml-0 w-10" />Por Especilidad
          </button>
          <button
            @click="openModal('ubicacion')"
            class="bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-2 flex items-center"
          >
            <IconoMapa class="ml-2 w-6" :fill="'white'" /> Por Ubicación
          </button>
        </div>
      </div>
      <div class="flex flex-wrap justify-center w-full pt-32">
        <div class="flex justify-center w-screen absolute space-x-4 md:space-x-12 xl:space-x-48">
          <button class="bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-3 flex items-center">
            Buscar <IconoBusqueda class="ml-3" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <main>
    <RouterView />
  </main>

  <div
    v-if="modal === 'especialidad'"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white rounded-lg p-6 w-3/4 max-w-md">
      <h2 class="text-xl font-bold mb-4">Especialidad buscada</h2>
      <ul>
        <li class="hover:bg-red-100 p-2"><a>Item 1</a></li>
        <li class="hover:bg-red-100 p-2"><a>Item 2</a></li>
      </ul>
      <button
        @click="closeModal"
        class="mt-4 bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-4"
      >
        Cerrar
      </button>
    </div>
  </div>

  <div
    v-if="modal === 'ubicacion'"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white rounded-lg p-6 w-3/4 max-w-md">
      <h2 class="text-xl font-bold mb-4">Ubicación</h2>
      <ul>
        <li class="hover:bg-red-100 p-2"><a>Item 1</a></li>
        <li class="hover:bg-red-100 p-2"><a>Item 2</a></li>
      </ul>
      <button
        @click="closeModal"
        class="mt-4 bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-4"
      >
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

const openModal = (type: string) => {
  modal.value = type;
};

const closeModal = () => {
  modal.value = null;
};
</script>
