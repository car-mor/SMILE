<template>
  <!-- Main -->
  <div
    class="flex flex-col items-center justify-center min-h-screen w-full bg-red-50 overflow-hidden"
  >
    <!-- Primera sección: Imagen y Sobre nosotros -->
    <div class="flex flex-col lg:flex-row justify-center items-center w-full p-4">
      <div class="flex justify-center lg:justify-end w-full lg:w-1/2">
        <img class="w-64 lg:w-auto" src="./../../../assets/imgs/quienesSomos.png" />
      </div>
      <div class="w-full lg:w-1/2 text-center lg:text-left p-4">
        <h1 class="text-4xl text-stone-500 font-bold">Sobre nosotros</h1>
        <p class="mt-6 text-gray-500">
          Bienvenidos a SMILE, un espacio creado por un grupo de estudiantes comprometidos con el
          bienestar emocional y la salud mental. Nos hemos unido con el objetivo de ofrecer un lugar
          seguro y acogedor donde puedas encontrar apoyo, recursos y orientación para afrontar los
          desafíos emocionales de la vida cotidiana.
        </p>
        <p class="mt-6 text-gray-500">
          ¡Únete a nosotros en este viaje hacia el bienestar emocional! Juntos, podemos cultivar un
          entorno de apoyo y comprensión que promueva la salud mental y el crecimiento personal para
          todos.
        </p>
      </div>
    </div>

    <!-- Segunda sección: Misión, Visión, y Carrusel -->
    <div class="flex flex-col items-center text-center w-full p-4 lg:mt-4">
      <h1 class="text-4xl text-stone-500 font-bold mt-12">Misión</h1>
      <p class="mt-6 text-gray-500">
        Brindar un servicio de apoyo emocional y psicológico para disminuir los niveles de depresión
        y ansiedad para tener una mejor calidad de vida orientado a estudiantes y adultos jóvenes de
        la Escuela Superior de Cómputo y alrededores mediante el desarrollo de una página web
        interactiva con recursos, foros, actividades y contacto con profesionales.
      </p>

      <h1 class="text-4xl text-stone-500 font-bold mt-6">Visión</h1>
      <p class="mt-6 text-gray-500">
        Convertirnos en el principal recurso en línea para el bienestar emocional de estudiantes a
        nivel mundial, promoviendo una calidad de vida digna, dando difusión al significado de la
        salud mental y contribuyendo a la prevención de sentimientos de soledad.
      </p>

      <div class="mt-6 w-[480px]">
        <div class="carousel w-auto md:w-80 h-auto mt-2 items-center">
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
    </div>
  </div>
</template>
