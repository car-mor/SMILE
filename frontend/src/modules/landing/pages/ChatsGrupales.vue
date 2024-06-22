<template>
  <div class="h-screen xl:w-3/4 w-screen absolute bg-[#FFEEE5] flex flex-col items-center">
    <div class="mt-14 text-center flex flex-col items-center">
      <h1 class="text-5xl w-auto sm:w-[500px] md:w-[640px] text-stone-500">Explorar grupos</h1>
      <h6 class="text-xl w-auto sm:w-[500px] md:w-[640px] text-stone-500 pt-10 text-left">
        Categorías de grupos
      </h6>

      <div class="hidden lg:flex flex-col mt-12 ml-8 items-center md:mt-1">
        <div class="flex flex-row">
          <div class="flex justify-center pt-8 space-x-16">
            <RouterLink to="/categoria/amigos">
              <img class="h-48" src="@/assets/imgs/groups/gruposAmigos.png" />
            </RouterLink>
            <RouterLink to="/categoria/ansiedad">
              <img class="h-48" src="@/assets/imgs/groups/gruposAnsiedad.png" />
            </RouterLink>
          </div>
        </div>
        <div class="flex flex-row">
          <div class="flex justify-center pt-8 space-x-6">
            <RouterLink to="/categoria/familia">
              <img class="h-64" src="@/assets/imgs/groups/gruposFamilia.png" />
            </RouterLink>
            <RouterLink to="/categoria/depresion">
              <img class="h-64" src="@/assets/imgs/groups/gruposDepresion.png" />
            </RouterLink>
            <RouterLink to="/categoria/acoso">
              <img class="h-64" src="@/assets/imgs/groups/gruposAcoso.png" />
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Carrusel vertical para pantallas pequeñas -->
      <div class="lg:hidden mt-12 w-screen h-3/4 bg-[#FFEEE5] absolute flex justify-center mt-32">
        <div class="carousel carousel-vertical rounded-box w-3/4">
          <div class="carousel-item flex justify-center">
            <RouterLink to="/categoria/amigos">
              <img class="h-64 object-contain" src="@/assets/imgs/groups/gruposAmigos.png" />
            </RouterLink>
          </div>
          <div class="carousel-item flex justify-center">
            <RouterLink to="/categoria/ansiedad">
              <img class="h-64 object-contain" src="@/assets/imgs/groups/gruposAnsiedad.png" />
            </RouterLink>
          </div>
          <div class="carousel-item flex justify-center">
            <RouterLink to="/categoria/familia">
              <img class="h-64 object-contain" src="@/assets/imgs/groups/gruposFamilia.png" />
            </RouterLink>
          </div>
          <div class="carousel-item flex justify-center mt-10">
            <RouterLink to="/categoria/depresion">
              <img class="h-64 object-contain" src="@/assets/imgs/groups/gruposDepresion.png" />
            </RouterLink>
          </div>
          <div class="carousel-item flex justify-center mt-10 pb-12">
            <RouterLink to="/categoria/acoso">
              <img class="h-64 object-contain" src="@/assets/imgs/groups/gruposAcoso.png" />
            </RouterLink>
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
