<template>
  <div class="flex flex-col md:flex-row w-full h-full absolute bg-[#FFEEE5]">
    <div
      class="basis-1/4 h-full flex flex-col items-center justify-center md:order-2 md:basis-1/2 md:mr-12 md:ml-8"
    >
      <img class="w-64 md:w-auto" src="@/assets/imgs/logoSinFondo.png" alt="Logo de SMILE" />
    </div>
    <div
      class="basis-3/4 flex flex-col justify-center md:basis-1/2 md:order-1 text-center md:text-justify"
    >
      <h1 class="text-stone-500 text-4xl mt-4 ml-4 mr-4 md:text-6xl">
        Porque cuidar tu mente es prioridad: inspira, crece y transforma tu vida con SMILE.
      </h1>

      <div class="flex flex-col md:flex-row mt-12 justify-center md:mt-1">
        <div class="flex justify-center mt-12">
          <button class="bg-[#E6836D] rounded-lg py-2 px-4 text-white">
            <RouterLink to="/about" class="text-xl">¿Quiénes somos?</RouterLink>
          </button>
        </div>
        <div class="flex justify-center mt-12">
          <button class="bg-[#E6836D] rounded-lg py-2 px-4 text-white md:ml-4">
            <RouterLink to="/login" class="text-xl">Comenzar ahora</RouterLink>
          </button>
        </div>
      </div>
    </div>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<script setup>

import { onMounted  } from 'vue';
import router from "@/router"

import Cookies from 'js-cookie'

onMounted(async () => {
  obtenerUsuarioActivo()
})

const obtenerUsuarioActivo = async() =>{
  
  const jwtToken = Cookies.get('jwt');
  if (jwtToken) {
    router.push({name:"home"})
  } else {
    console.log('La cookie jwt no tiene valor o no existe.');
  }
 
}

</script>
