<template>
  <div class="flex flex-col md:flex-row w-full h-full absolute bg-red-50">
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
          <button class="bg-red-200 rounded-lg py-2 px-4 text-white">
            <RouterLink to="/about">¿Quiénes somos?</RouterLink>
          </button>
        </div>
        <div class="flex justify-center mt-12">
          <button class="bg-red-200 rounded-lg py-2 px-4 text-white md:ml-4">
            <RouterLink to="/login">Comenzar ahora</RouterLink>
          </button>
        </div>
      </div>
    </div>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<script lang="ts" setup></script>
