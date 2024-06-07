<template>
  <div class="h-screen xl:w-3/4 w-screen absolute bg-[#FFEEE5] flex flex-col items-center">
    <div class="relative text-gray-600 z-51">
      <input
        class="z-40 border-2 border-gray-300 mt-6 h-10 w-48 pl-10 pr-5 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Busca tus podcasts favoritos"
        autocomplete="off"
        v-model="searchQuery"
        @input="handleSearch"
      />
      <button type="submit" class="absolute left-0 top-0 mt-9 ml-3 text-stone-500">
        <IconoBusqueda />
      </button>
    </div>
    <div
      v-if="searchResults.length > 0"
      class="flex flex-col w-full items-center bg-[#FFEEE5] justify-center mt-8 space-y-8"
    >
      <div class="h-screen carousel carousel-vertical rounded-box">
        <div
          v-for="(podcast, index) in searchResults"
          :key="podcast.id + '-' + index"
          class="carousel-item mb-8"
        >
          <div class="flex flex-col items-center space-y-1">
            <img
              v-if="!imageLoadErrors[podcast.id]"
              :src="podcast.image"
              alt="Podcast"
              @error="handleImageError(podcast.id)"
              class="rounded-box w-auto h-48 object-cover"
            />
            <IconoSinImagen v-else class="bg-[#fee2e2] border-2 rounded-lg border-[#E6836D]" />
            <div>
              <p class="w-64 text-wrap">{{ podcast.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="flex flex-col w-full items-center bg-[#FFEEE5] justify-center mt-8 space-y-8"
    >
      <div
        v-for="(category, catIndex) in podcastCategories"
        :key="category.name + '-' + catIndex"
        class="w-full"
      >
        <h2 class="text-xl font-semibold text-stone-500 pl-32">{{ category.name }}</h2>
        <div class="flex w-full justify-center">
          <div
            class="carousel carousel-center object-cover w-full lg:w-[1024px] h-64 p-4 space-x-4 bg-neutral rounded-box mb-16"
          >
            <div
              v-for="(podcast, index) in category.podcasts"
              :key="podcast.id + '-' + index"
              class="carousel-item"
            >
              <div class="flex flex-col items-center">
                <img
                  v-if="!imageLoadErrors[podcast.id]"
                  :src="podcast.image"
                  alt="Podcast"
                  @error="handleImageError(podcast.id)"
                  class="rounded-box w-auto h-48 object-cover"
                />
                <IconoSinImagen v-else class="bg-[#fee2e2] border-2 rounded-lg border-[#E6836D]" />
                <div>
                  <p class="w-64 text-wrap">{{ podcast.title }}</p>
                </div>
              </div>
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

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import fetchRandomSpanishPsychologyPodcast from './../../../composables/getPodcasts';
import IconoBusqueda from './../../../assets/icons/ComponentsIcons/IconoBusqueda.vue';
import IconoSinImagen from './../../../assets/icons/ComponentsIcons/IconoSinImagen.vue';

// Definición de interfaces para el tipado de datos
interface Podcast {
  id: string;
  title: string;
  image: string;
  categories?: { [key: string]: string }; // Ajuste para reflejar la estructura correcta
}

interface PodcastCategory {
  name: string;
  podcasts: Podcast[];
}

// Estado de las categorías de podcasts
const podcastCategories = ref<PodcastCategory[]>([
  { name: 'Desarrollo personal', podcasts: [] },
  { name: 'Salud', podcasts: [] },
  { name: 'Cultura', podcasts: [] },
  { name: 'Educación', podcasts: [] },
  { name: 'Ciencia', podcasts: [] },
]);

// Estado para rastrear errores de carga de imagen
const imageLoadErrors = ref<{ [key: string]: boolean }>({});

// Estado para la búsqueda
const searchQuery = ref('');
const searchResults = ref<Podcast[]>([]);

// Función para obtener y categorizar podcasts
const fetchAndCategorizePodcasts = async () => {
  try {
    const podcasts: Podcast[] = await fetchRandomSpanishPsychologyPodcast();
    console.log('Podcasts totales:', podcasts);

    if (Array.isArray(podcasts)) {
      categorizePodcasts(podcasts);
    } else {
      throw new Error('Los datos obtenidos no son un array');
    }
  } catch (error) {
    console.error('Error al obtener los podcasts:', error);
  }
};

// Función para categorizar los podcasts
const categorizePodcasts = (podcasts: Podcast[]) => {
  const categoriesMap: { [key: string]: string } = {
    Science: 'Ciencia',
    Education: 'Educación',
    'Self Improvement': 'Desarrollo personal',
    Culture: 'Cultura',
    Health: 'Salud',
  };

  podcasts.forEach((podcast) => {
    if (podcast.categories) {
      Object.values(podcast.categories).forEach((category) => {
        const categoryName = categoriesMap[category as keyof typeof categoriesMap];
        if (categoryName) {
          const categoryObj = podcastCategories.value.find((cat) => cat.name === categoryName);
          if (categoryObj) {
            categoryObj.podcasts.push(podcast);
          }
        }
      });
    }
  });
};

// Maneja el error de carga de la imagen
const handleImageError = (podcastId: string) => {
  imageLoadErrors.value[podcastId] = true;
};

// Maneja la búsqueda
const handleSearch = () => {
  const query = searchQuery.value.toLowerCase();
  if (query) {
    searchResults.value = podcastCategories.value
      .flatMap((category) => category.podcasts)
      .filter((podcast) => podcast.title.toLowerCase().includes(query));
  } else {
    searchResults.value = [];
  }
};

// Monta el componente y obtiene los podcasts
onMounted(() => {
  fetchAndCategorizePodcasts();
});
</script>

<style scoped>
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.carousel-item {
  scroll-snap-align: start;
  flex: none;
}

.text-wrap {
  white-space: normal;
  text-align: center;
}
</style>
