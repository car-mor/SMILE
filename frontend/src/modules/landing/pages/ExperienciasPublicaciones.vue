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
                  <p>{{ post.author }}</p>
                  <p class="text-wrap text-justify">{{ post.comment }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-stone-500 text-xl md:mt-64 md:absolute md:left-0 md:ml-32 pt-8">
        Te podrían interesar publicaciones sobre...
      </p>
      <div class="flex w-screen justify-center pt-8">
        <div
          class="carousel carousel-center object-cover w-full lg:w-[1024px] h-auto p-2 space-x-4 bg-neutral rounded-box mb-8 md:ml-16 mt-8"
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
    title: 'Post 1',
    author: 'Author 1',
    comment: 'Comentario sobre psicología 1 sfdnpaisfnapsnofaslnfañsnl',
  },
  { title: 'Post 2', author: 'Author 2', comment: 'Comentario sobre psicología 2' },
  { title: 'Post 3', author: 'Author 3', comment: 'Comentario sobre psicología 3' },
  { title: 'Post 4', author: 'Author 4', comment: 'Comentario sobre psicología 4' },
  { title: 'Post 5', author: 'Author 5', comment: 'Comentario sobre psicología 5' },
  { title: 'Post 6', author: 'Author 6', comment: 'Comentario sobre psicología 6' },
  { title: 'Post 7', author: 'Author 7', comment: 'Comentario sobre psicología 7' },
  { title: 'Post 8', author: 'Author 8', comment: 'Comentario sobre psicología 8' },
  { title: 'Post 9', author: 'Author 9', comment: 'Comentario sobre psicología 9' },
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
