<template>
  <div class="h-screen xl:w-3/4 w-screen bg-[#FFEEE5] flex flex-col items-center">
    <div class="mt-24 text-center flex flex-col items-center">
      <h1 class="text-5xl w-auto sm:w-[500px] md:w-[640px] font-yeseva">
        Comienza tu día con un podcast
      </h1>
      <p class="text-xl mt-6 font-serif w-auto sm:w-[400px] md:w-[480px]">
        "Donde la mente se encuentra con el micrófono: Tu podcast de Psicología"
      </p>
      <img class="w-auto h-32 mt-8" src="./../.././../assets/icons/microIcon.png" />
      <div class="flex flex-col md:flex-row mt-12 justify-center md:mt-1 bg-[#FFEEE5] w-full">
        <div class="justify-center mt-12">
          <button
            @click="getRandomPodcast"
            class="bg-[#E6836D] hover:bg-red-200 rounded-lg py-2 px-4 text-black"
          >
            Escuchar podcast aleatorio
          </button>
        </div>
        <div class="justify-center mt-12">
          <button
            class="bg-[#E6836D] hover:bg-red-200 rounded-lg py-2 px-4 text-black md:ml-4 mb-8"
          >
            <RouterLink :to="{ name: 'explore-podcasts' }">Descubrir podcasts</RouterLink>
          </button>
        </div>
      </div>
      <div class="w-screen h-full xl:pl-64 xl:pr-64">
        <PodcastReproductor
          v-if="podcast && episodes.length > 0"
          :podcast="podcast"
          :episodes="episodes"
          class="text-left"
        />
      </div>
    </div>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import fetchRandomSpanishPsychologyPodcast from './../../../composables/randomPodcast';
import { fetchPodcastEpisodes } from './../../../composables/urlPodcastAudio';
import PodcastReproductor from './../../../components/PodcastReproductor.vue';

interface Podcast {
  title: string;
  author: string;
  image: string;
  url: string; // URL del RSS feed del podcast
}

interface Episode {
  title: string;
  enclosureUrl: string;
}

const podcast = ref<Podcast | null>(null);
const episodes = ref<Episode[]>([]);

const getRandomPodcast = async () => {
  try {
    const result = await fetchRandomSpanishPsychologyPodcast();
    podcast.value = {
      title: result.title,
      author: result.author,
      image: result.image,
      url: result.originalUrl, // Usar originalUrl para obtener el XML
    };

    if (podcast.value) {
      const audioResult = await fetchPodcastEpisodes(podcast.value.url);
      if (audioResult) {
        episodes.value = audioResult;
      } else {
        episodes.value = []; // Si no se encuentran audios, asignar un array vacío
      }
    }
  } catch (error) {
    console.error('Error al obtener el podcast:', error);
  }
};
</script>
