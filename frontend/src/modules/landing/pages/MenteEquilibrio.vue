<template>
    <div class="h-screen xl:w-3/4 w-screen absolute bg-[#FFEEE5] flex flex-col items-center">
      <div class="mt-10 text-center flex flex-col items-center">
        <h1 class="lg:pt-0 pt-14 text-5xl w-auto sm:w-[500px] md:w-[640px] text-stone-500">
          Sección Mente en Equilibrio
        </h1>
        <h4 class="text-lg text-stone-500 pt-6 bg-[#FFEEE5] w-screen gridmr-2" style="font-weight: bold; font-size: 1.5rem; margin-right: 60rem;">
            ¿Sabías qué...?
        </h4>
        <h4 class="text-lg text-stone-500 pt-6 bg-[#FFEEE5] w-screen grid place-content-center mr-2">
            Los Rompecabezas ayudan a mejorar la memoria, la concentración y las habilidades de resolución de problemas, además de tener un efecto calmante.
            <br>
            Los juegos de memoria ayudan a mejorar la memoria a corto plazo y la atención, manteniendo la mente activa y combatiendo la fatiga mental.
        </h4>


        <section>
    <div class="container px-6 py-10 mx-auto">
        <h1 class="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

        <p class="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p class="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">

            <!-- sudoku-->
            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600 flex items-center justify-center">
                    <img src="@/assets/imgs/games/sudoku.jpg" alt="sudoku" class="max-w-full max-h-full">
                </div>
                <h4 class="text-lg text-stone-500 pt-6 bg-[#FFEEE5]" style="font-weight: bold; font-size: 1.5rem;">
                    Daily Sudoku
                </h4>
                <h1 class="w-56 h-2 mt-4 bg-gray-400 rounded-lg dark:bg-gray-100">
                </h1>
            </div>

            <!-- crucigrama-->
            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600 flex items-center justify-center">
                    <img src="@/assets/imgs/games/crucigrama.jpg" alt="crucigrama" class="max-w-full max-h-full">
                </div>
                <h4 class="text-lg text-stone-500 pt-6 bg-[#FFEEE5]" style="font-weight: bold; font-size: 1.5rem;">
                    Cricigrama clásico
                </h4>
                <h1 class="w-56 h-2 mt-4 bg-gray-400 rounded-lg dark:bg-gray-100">
                </h1>
            </div>

            <!-- memory game-->
            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600 flex items-center justify-center">
                    <img src="@/assets/imgs/games/memorama.jpg" alt="memorama" class="max-w-full max-h-full">
                </div>
                <h4 class="text-lg text-stone-500 pt-6 bg-[#FFEEE5]" style="font-weight: bold; font-size: 1.5rem;">
                    Memorama
                </h4>
                <h1 class="w-56 h-2 mt-4 bg-gray-400 rounded-lg dark:bg-gray-100">
                </h1>
            </div>

            <!-- sopa de letras-->
            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600 flex items-center justify-center">
                    <img src="@/assets/imgs/games/sopadeletras.jpg" alt="sopa de letras" class="max-w-full max-h-full">
                </div>
                <h4 class="text-lg text-stone-500 pt-6 bg-[#FFEEE5]" style="font-weight: bold; font-size: 1.5rem;">
                    Sopa de letras
                </h4>
                <h1 class="w-56 h-2 mt-4 bg-gray-400 rounded-lg dark:bg-gray-100">
                </h1>
            </div>

            
        </div>
    </div>
</section>



        </div>
    </div>
</template>
  
  <script>
  export default {
    // No need for extra components as we are using DaisyUI classes
  };
  </script>
  
  <style>
  /* Estilos adicionales si es necesario */
  </style>