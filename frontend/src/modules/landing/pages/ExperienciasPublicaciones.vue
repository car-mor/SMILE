<template>
  <div class="h-screen xl:w-3/4 w-screen absolute bg-[#FFEEE5] flex flex-col items-center">
    <div class="mt-14 text-center flex flex-col items-center bg-[#FFEEE5]">
      <h1 class="text-5xl w-auto sm:w-[500px] md:w-[640px] text-stone-500">
        Explorar publicaciones
      </h1>
      <p class="text-stone-500 text-xl mt-10 md:absolute md:left-0 md:ml-32 pt-8">
        Lo destacado de esta semana
      </p>
      <div class="flex flex-col md:flex-row mt-0 justify-center md:mt-1">
        <div class="flex w-screen justify-center pt-8">
          <div
            class="carousel carousel-center object-cover w-full lg:w-[1024px] h-auto p-2 space-x-4 bg-neutral rounded-box mb-8 md:ml-16 mt-8"
          >
            <div
              v-for="post in posts"
              :key="post.title"
              class="carousel-item bg-stone-100 p-4 w-64"
            >
              <div class="flex flex-col items-center">
                <div>
                  <h3 class="font-bold">{{ post.title }}</h3>
                  <p class="text-left mt-4 mb-2">{{ post.author }}</p>
                  <p class="text-wrap text-justify">{{ post.comment }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="flex w-screen justify-center pt-0">
        <p class="text-stone-500 text-xl  md:absolute md:left-0 md:ml-32 pt-8">
        Te podrían interesar publicaciones sobre...
      </p>
        <div
          class="carousel carousel-center object-cover w-full lg:w-[1024px] h-auto p-2 space-x-4 bg-neutral rounded-box mb-8 md:ml-16 mt-16"
        >
          <RouterLink
            v-for="category in categories"
            :key="category.title"
            :to="category.link"
            class="carousel-item bg-none p-4 w-64"
          >
            <div class="flex flex-col items-center">
              <img :src="category.image" alt="" class="w-full h-auto object-cover mb-2" />
              <div>
                <p class="text-wrap text-center text-stone-500">{{ category.description }}</p>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import postAmor from '@/assets/imgs/posts/postAmor.png';
import postEstres from '@/assets/imgs/posts/postEstres.png';
import postEsperanza from '@/assets/imgs/posts/postEsperanza.png';
import postInsomnio from '@/assets/imgs/posts/postInsomnio.png';
import postMeditacion from '@/assets/imgs/posts/postMeditacion.png';
import postSoledad from '@/assets/imgs/posts/postSoledad.png';

const posts = ref([
  {
    title: 'Los efectos positivos de la meditación en mi vida',
    author: 'Ana María',
    comment: 'He descubierto que la meditación diaria no solo calma mi mente, sino que también mejora mi enfoque y reduce mi estrés diario de manera significativa.',
  },
  {
    title: 'Cómo el ejercicio ha transformado mi salud mental',
    author: 'Juan Pérez',
    comment: 'Desde que comencé a hacer ejercicio regularmente, he experimentado una notable mejora en mi estado de ánimo y mi autoestima. ¡El ejercicio realmente funciona!',
  },
  {
    title: 'Mis técnicas para mantenerme motivado durante el estudio',
    author: 'María González',
    comment: 'Encontré que establecer metas pequeñas y celebrar cada logro me ayuda a mantenerme motivada mientras estudio. ¡Es increíble cómo pequeños cambios pueden marcar la diferencia!',
  },
  {
    title: 'Cómo manejar el estrés en tiempos difíciles',
    author: 'Carlos Rodríguez',
    comment: 'El estrés puede ser abrumador, pero he aprendido a gestionarlo mediante técnicas de respiración y actividades relajantes como la lectura y la música.',
  },
  {
    title: 'La importancia de la comunicación en las relaciones personales',
    author: 'Luisa Martínez',
    comment: 'He descubierto que la comunicación abierta y honesta es fundamental para mantener relaciones saludables y significativas en mi vida.',
  },
  {
    title: 'Cómo encontrar equilibrio entre trabajo y vida personal',
    author: 'Andrés Gómez',
    comment: 'Establecer límites claros y dedicar tiempo a actividades que disfruto fuera del trabajo me ha ayudado a encontrar un equilibrio saludable entre mi carrera y mi vida personal.',
  },
  {
    title: 'Reflexiones sobre la importancia de la gratitud',
    author: 'Laura Sánchez',
    comment: 'Practicar la gratitud diaria me ha permitido enfocarme en lo positivo de mi vida y apreciar las pequeñas alegrías cotidianas. ¡La gratitud realmente transforma la perspectiva!',
  },
  {
    title: 'Cómo superé mis miedos y me lancé a nuevos desafíos',
    author: 'Pedro Fernández',
    comment: 'Enfrentar mis miedos gradualmente y tomar pequeños pasos fuera de mi zona de confort me ha permitido crecer personal y profesionalmente de maneras que nunca imaginé.',
  },
  {
    title: 'Mi experiencia con la terapia y su impacto positivo en mi bienestar',
    author: 'Sofía Ramírez',
    comment: 'La terapia ha sido un viaje transformador para mí, ayudándome a comprenderme mejor y desarrollar herramientas para manejar mis emociones y relaciones de manera más saludable.',
  },
]);


const categories = ref([
  {
    title: 'Amor',
    description: 'Publicaciones sobre amor y relaciones.',
    image: postAmor,
    link: '/categoria/amor',
  },
  {
    title: 'Estrés',
    description: 'Publicaciones sobre manejo del estrés.',
    image: postEstres,
    link: '/categoria/estres',
  },
  {
    title: 'Esperanza',
    description: 'Publicaciones sobre esperanza y motivación.',
    image: postEsperanza,
    link: '/categoria/esperanza',
  },
  {
    title: 'Insomnio',
    description: 'Publicaciones sobre cómo combatir el insomnio.',
    image: postInsomnio,
    link: '/categoria/insomnio',
  },
  {
    title: 'Meditación',
    description: 'Publicaciones sobre técnicas de meditación.',
    image: postMeditacion,
    link: '/categoria/meditacion',
  },
  {
    title: 'Soledad',
    description: 'Publicaciones sobre cómo afrontar la soledad.',
    image: postSoledad,
    link: '/categoria/soledad',
  },
]);
</script>
