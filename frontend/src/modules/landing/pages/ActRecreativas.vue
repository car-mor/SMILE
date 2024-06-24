<template>
  <div class="h-screen xl:w-3/4 w-screen absolute bg-[#FFEEE5] flex flex-col items-center">
    <div class="mt-10 text-center flex flex-col items-center">
      <h1 class="lg:pt-0 pt-14 text-5xl w-auto sm:w-[500px] md:w-[640px] text-stone-500">
        Refuerza tus habilidades con actividades recreativas
      </h1>

      <!-- Diseño para pantallas grandes -->
      <div
        class="hidden lg:flex flex-col mt-12 ml-8 items-center md:mt-16 w-screen bg-[#FFEEE5] pb-14"
      >
        <div class="flex flex-row justify-center space-x-8">
          <img
            class="h-48"
            src="@/assets/imgs/games/juegosEstrella.png"
            alt="Mente en equilibrio"
          />
          <div>
            <h1 class="pt-4 text-stone-500 text-4xl text-wrap w-40">Mente en equilibrio</h1>
            <RouterLink to="/actividad/mente-en-equilibrio">
              <button class="mt-8 bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-4">
                Ver más
              </button>
            </RouterLink>
          </div>
          <img class="h-48" src="@/assets/imgs/games/juegosDiamante.png" alt="Resiliencia rápida" />
          <div>
            <h1 class="pt-4 text-stone-500 text-4xl text-wrap w-40">Resiliencia rápida</h1>
            <RouterLink to="/actividad/resiliencia-rapida">
              <button class="mt-8 bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-4">
                Ver más
              </button>
            </RouterLink>
          </div>
        </div>
        <div class="flex flex-row justify-center space-x-8 mt-8">
          <img class="h-48" src="@/assets/imgs/games/juegosGorro.png" alt="Elevación anímica" />
          <div>
            <h1 class="pt-4 text-stone-500 text-4xl text-wrap w-40">Elevación anímica</h1>
            <RouterLink to="/actividad/elevacion-animica">
              <button class="mt-8 bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-4">
                Ver más
              </button>
            </RouterLink>
          </div>
          <img class="h-48" src="@/assets/imgs/games/juegosMedalla.png" alt="Laberinto emocional" />
          <div>
            <h1 class="pt-4 text-stone-500 text-4xl text-wrap w-40">Laberinto emocional</h1>
            <RouterLink to="/actividad/laberinto-emocional">
              <button class="mt-8 bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-4">
                Ver más
              </button>
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Carrusel vertical para pantallas pequeñas -->
      <div class="lg:hidden mt-12 w-screen flex flex-col bg-[#FFEEE5] items-center">
        <div class="w-3/4">
          <div class="h-full carousel carousel-vertical rounded-box space-y-8">
            <div class="carousel-item flex flex-col items-center">
              <img
                class="w-64 object-contain"
                src="@/assets/imgs/games/juegosEstrella.png"
                alt="Mente en equilibrio"
              />
              <RouterLink to="/actividad/mente-en-equilibrio">
                <button class="mt-4 bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-2">
                  Ver más
                </button>
              </RouterLink>
            </div>
            <div class="carousel-item flex flex-col items-center">
              <img
                class="w-64 object-contain"
                src="@/assets/imgs/games/juegosDiamante.png"
                alt="Resiliencia rápida"
              />
              <RouterLink to="/actividad/resiliencia-rapida">
                <button class="mt-4 bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-2">
                  Ver más
                </button>
              </RouterLink>
            </div>
            <div class="carousel-item flex flex-col items-center">
              <img
                class="w-64 object-contain"
                src="@/assets/imgs/games/juegosGorro.png"
                alt="Elevación anímica"
              />
              <RouterLink to="/actividad/elevacion-animica">
                <button class="mt-4 bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-2">
                  Ver más
                </button>
              </RouterLink>
            </div>
            <div class="carousel-item flex flex-col items-center pb-10">
              <img
                class="w-64 object-contain"
                src="@/assets/imgs/games/juegosMedalla.png"
                alt="Laberinto emocional"
              />
              <RouterLink to="/actividad/laberinto-emocional">
                <button class="mt-4 bg-[#E6836D] hover:bg-red-200 rounded-lg text-white p-2">
                  Ver más
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<script>
export default {
  // No need for extra components as we are using DaisyUI classes
};
</script>

<style>
/* Estilos adicionales si es necesario */
</style>
