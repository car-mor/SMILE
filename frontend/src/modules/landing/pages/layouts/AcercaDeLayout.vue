<template>
  <div class="flex flex-col h-full w-full absolute bg-red-50">
    <!-- Header -->
    <header
      class="flex items-center h-auto px-4 border-b border-gray-300 bg-orange-50 sm:h-16 md:px-6 lg:px-8"
    >
      <div>
        <nav class="flex items-center gap-2 font-semibold" href="#">
          <!-- <div> Iconos diseñados por <a href="https://www.flaticon.es/autores/pixel-perfect" title="Pixel perfect"> Pixel perfect </a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es'</a></div> -->
          <RouterLink to="/">
            <span class="flex items-center">
              <img class="h-8" src="./../../../../assets/icons/flecha-izquierda.png" />
            </span>
          </RouterLink>
        </nav>
      </div>
      <a class="ml-auto space-x-4 flex items-center h-auto sm:space-x-6">
        <img
          class="w-auto h-14"
          alt="Logo smile"
          src="./../../../../assets/imgs/logoSinFondo.png"
          width="40"
          height="40"
        />
      </a>
    </header>
    <main>
      <RouterLink :to="{ name: 'about-us' }"></RouterLink>
      <RouterView />
    </main>
  </div>
</template>
