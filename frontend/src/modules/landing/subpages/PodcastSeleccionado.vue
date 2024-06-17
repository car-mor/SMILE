<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <div
      v-else-if="podcast"
      class="flex flex-col h-screen w-full absolute items-center bg-[#FFEEE5] xl:pr-64"
    >
      <h1 v-if="!showPlayer" class="text-4xl mt-28 text-stone-500">{{ podcast.title }}</h1>
      <img
        v-if="!showPlayer"
        :src="podcast.image"
        alt="Podcast Image"
        class="border-2 border-transparent w-64 rounded-lg m-16 md:w-64"
      />
      <!-- Añadir más detalles del podcast -->
      <ul v-if="!showPlayer">
        <li
          v-for="episode in episodes"
          :key="episode.enclosureUrl"
          @click="playEpisode(episode)"
          class="hover:bg-[#E6836D] hover:text-white hover:border-2 hover:border-transparent hover:rounded-lg h-10 justify-center text-xl flex items-center"
        >
          {{ episode.title }}
        </li>
      </ul>
      <PodcastReproductor
        v-if="showPlayer && selectedEpisode"
        :podcast="podcast"
        :episodes="episodes"
        :podcastTitle="podcast.title"
        :podcastAuthor="podcast.author"
        :podcastImage="podcast.image"
        :episode="selectedEpisode"
      />
    </div>
    <div v-else>Cargando...</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import getPodcastByID from '@/composables/podcastByID';
import { fetchPodcastEpisodes } from './../../../composables/urlPodcastAudio';
import PodcastReproductor from './../../../components/PodcastReproductor.vue';

interface Podcast {
  id: string;
  title: string;
  image: string;
  url: string;
  author: string;
}

interface Episode {
  title: string;
  enclosureUrl: string;
}

const podcast = ref<Podcast | null>(null);
const episodes = ref<Episode[]>([]);
const error = ref<string | null>(null);
const selectedEpisode = ref<Episode | null>(null);
const showPlayer = ref(false);
const route = useRoute();
const rssurl = ref<string | undefined>(undefined);

onMounted(async () => {
  const itunesId = route.params.itunesId as string;
  try {
    const result = await getPodcastByID(itunesId);

    console.log('Result from getPodcastByID:', result); // Agregar este console log para depuración
    if (result && result.podcast) {
      podcast.value = result.podcast as Podcast; // Asegúrate de que 'author' esté presente
      rssurl.value = result.podcast.url;
      console.log(rssurl.value);
    }

    if (rssurl.value) {
      const dataPodcast = await fetchPodcastEpisodes(rssurl.value);
      if (dataPodcast) {
        // Actualizar el array de episodios con los datos obtenidos
        episodes.value = dataPodcast;
        console.log(episodes.value);
      } else {
        error.value = 'Error al obtener los episodios del podcast.';
      }
    } else {
      error.value = 'URL del podcast no disponible.';
    }
  } catch (e) {
    console.error('Error al obtener los detalles del podcast:', e);
    error.value = 'Error al obtener los detalles del podcast.';
  }
});

const playEpisode = (episode: Episode) => {
  selectedEpisode.value = episode;
  showPlayer.value = true;
};
</script>
