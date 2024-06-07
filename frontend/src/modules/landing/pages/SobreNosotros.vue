<template>
  <!-- Main -->
  <div
    class="flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-[#FFEEE5]"
  >
    <!-- Primera sección: Imagen y Sobre nosotros -->

    <div class="flex flex-col lg:flex-row justify-center items-center w-full p-4">
      <div class="flex justify-center lg:justify-end w-full lg:w-1/2">
        <img class="w-64 lg:w-auto" src="./../../../assets/imgs/quienesSomos.png" />
      </div>
      <div class="w-full lg:w-1/2 text-center lg:text-left p-4">
        <h1 class="text-5xl text-stone-500 font-serif">Sobre nosotros</h1>
        <p class="text-justify mt-6 text-gray-500 text-2xl">
          Bienvenidos a SMILE, un espacio creado por un grupo de estudiantes comprometidos con el
          bienestar emocional y la salud mental. Nos hemos unido con el objetivo de ofrecer un lugar
          seguro y acogedor donde puedas encontrar apoyo, recursos y orientación para afrontar los
          desafíos emocionales de la vida cotidiana.
        </p>
        <p class="text-justify mt-6 text-gray-500 text-2xl">
          ¡Únete a nosotros en este viaje hacia el bienestar emocional! Juntos, podemos cultivar un
          entorno de apoyo y comprensión que promueva la salud mental y el crecimiento personal para
          todos.
        </p>
      </div>
    </div>

    <!-- Segunda sección: Misión, Visión, y Carrusel -->
    <div class="flex flex-col xl:flex-row items-center text-center w-full p-4 lg:mt-6">
      <div class="xl:w-1/2">
        <h1 class="text-4xl text-stone-500 font-bold mt-14">Misión</h1>
        <p class="px-16 text-justify mt-6 text-gray-500 text-2xl">
          Brindar un servicio de apoyo emocional y psicológico para disminuir los niveles de
          depresión y ansiedad para tener una mejor calidad de vida orientado a estudiantes y
          adultos jóvenes de la Escuela Superior de Cómputo y alrededores mediante el desarrollo de
          una página web interactiva con recursos, foros, actividades y contacto con profesionales.
        </p>
      </div>

      <div class="xl:w-1/2">
        <h1 class="text-4xl text-stone-500 font-bold mt-2">Visión</h1>
        <p class="px-16 text-justify mt-6 text-gray-500 text-2xl">
          Convertirnos en el principal recurso en línea para el bienestar emocional de estudiantes a
          nivel mundial, promoviendo una calidad de vida digna, dando difusión al significado de la
          salud mental y contribuyendo a la prevención de sentimientos de soledad.
        </p>
      </div>
    </div>
    <div class="mt-6 md:hidden">
      <div class="carousel w-[480px] md:w-80 h-auto mt-2 items-center">
        <div class="flex flex-col carousel-item w-1/3 items-center">
          <img src="./../../../assets/icons/actividadesRecreativas.png" class="w-18 h-26 p-4" />
          <p>Actividades recreativas</p>
        </div>
        <div class="flex flex-col carousel-item w-1/3 items-center">
          <img src="./../../../assets/icons/chatsPersonalizados.png" class="w-auto h-auto p-3" />
          <p>Chats personalizados</p>
        </div>
        <div class="flex flex-col carousel-item w-1/3 items-center">
          <img src="./../../../assets/icons/Comunidad.png" class="w-auto h-auto p-4" />
          <p>Comunidad</p>
        </div>
        <div class="flex flex-col carousel-item w-1/3 items-center">
          <img src="./../../../assets/icons/apoyoEspecialistas.png" class="w-auto h-auto p-4" />
          <p>Apoyo de especialistas</p>
        </div>
        <div class="flex flex-col carousel-item w-1/3 items-center">
          <img src="./../../../assets/icons/Podcast.png" class="w-auto h-auto p-4" />
          <p>Podcast y videos</p>
        </div>
      </div>
    </div>

    <div class="flex flex-row md:visible invisible space-x-2 ml-8 mr-8 mb-32">
      <div class="w-32 h-auto">
        <img src="./../../../assets/icons/actividadesRecreativas.png" class="w-18 h-26 p-4" />
        <p class="text-center">Actividades recreativas</p>
      </div>
      <div class="w-32 h-auto">
        <img src="./../../../assets/icons/chatsPersonalizados.png" class="w-auto h-auto p-3" />
        <p class="text-center">Chats personalizados</p>
      </div>
      <div class="w-32 h-auto">
        <img src="./../../../assets/icons/Comunidad.png" class="w-auto h-auto p-4" />
        <p class="text-center">Comunidad</p>
      </div>
      <div class="w-32 h-auto">
        <img src="./../../../assets/icons/apoyoEspecialistas.png" class="w-auto h-auto p-4" />
        <p class="text-center">Apoyo de especialistas</p>
      </div>
      <div class="w-32 h-auto">
        <img src="./../../../assets/icons/Podcast.png" class="w-auto h-auto p-4" />
        <p class="text-center">Podcast y videos</p>
      </div>
    </div>
  </div>
</template>
