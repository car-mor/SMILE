<template>
  <div class="h-screen w-screen xl:w-3/4 absolute bg-[#FFEEE5] flex flex-col items-center">
    <!-- Mensaje de bienvenida -->
    <h1 class="pt-14 text-5xl text-wrap text-center text-stone-500 ml-16 mr-16">Bienvenido(a) X</h1>

    <div class="mt-12 text-center flex flex-col items-center sm:flex-row sm:items-start">
      <!-- Imagen podcast y link -->
      <div class="bg-stone-500/40 rounded-xl sm:mr-4 mr- xl:ml-48">
        <img class="w-full lg:h-64 p-2 sm:h-[48vh]" src="@/assets/imgs/podcastHome.png" />
      </div>

      <!-- Botones -->
      <div
        class="flex flex-row md:px-32 space-x-4 sm:flex-col sm:space-x-0 sm:space-y-16 sm:ml-4 sm:mt-8"
      >
        <div
          class="btn w-24 h-16 border-0 bg-[#B5D8B8] hover:bg-[#BFF6C3] mt-4"
          onclick="my_modal_1.showModal()"
        >
          <IconoTelefono class="origin-center rotate-90" />
        </div>
        <dialog id="my_modal_1" class="modal">
          <div class="modal-box bg-red-100 border-4 border-[#E6836D] mr-8">
            <h3 class="font-bold text-lg">Números de emergencia:</h3>
            <ul class="text-left list-disc pl-5">
              <br />
              <li>
                <em>Línea de la Vida (SAPTEL): </em>
                <strong>01 800 832 54 32 (Gratuita)</strong> Atienden las 24 horas del día, todos
                los días del año. Brindan apoyo emocional y prevención del suicidio.
              </li>
              <br />
              <li>
                <em>Línea PAS (Prevención del Suicidio): </em>
                <strong>55 5259-8121 (Ciudad de México)</strong> Atienden las 24 horas, brindan
                orientación y apoyo emocional.
              </li>
              <br />
              <li>
                <em>UNASIS (Unidad de Atención Síquica): </em>
                <strong>800 472 7835 (Gratuita)</strong> Ofrecen atención psicológica y psiquiátrica
                gratuita las 24 horas.
              </li>
              <br />
              <li>
                <em>Línea de Apoyo en Crisis de Angustia (DIF Nacional): </em>
                <strong>01 800 911 2000 (Gratuita)</strong> Brindan atención psicológica las 24
                horas.
              </li>
              <br />
              <li>
                <em>Número de Emergencias 911: </em> <strong>911 (Todo el país)</strong> Atienden
                las 24 horas, los 365 días del año. Canalizan llamadas de emergencia, incluyendo
                tentativas de suicidio y solicitudes de apoyo psicológico urgente, a los servicios
                locales correspondientes.
              </li>
            </ul>
            <p class="py-4">
              Por favor, no dudes en llamarnos, tu bienestar es lo más importante, recuerda que no
              estás sol@.
            </p>
            <div class="grid place-items-center">
              <IconoCorazon />
            </div>
            <div class="modal-action">
              <form method="dialog">
                <button class="bg-[#E6836D] hover:bg-red-200 border-1 rounded-xl p-4">
                  Cerrar
                </button>
              </form>
            </div>
          </div>
        </dialog>
        <div class="btn w-24 h-16 border-0 bg-[#C2E6ED] hover:bg-[#E1F7F5] mt-4">
          <IconoMapa class="" :fill="'gray'" />
        </div>
        <div
          class="btn w-24 h-16 border-0 bg-[#DBA99D] hover:bg-[#FFD0D0] mt-4"
          onclick="my_modal_2.showModal()"
        >
          <IconoFrases class="" />
        </div>
        <dialog id="my_modal_2" class="modal">
          <div class="modal-box bg-red-100 border-4 border-[#E6836D] mr-8">
            <h3 class="font-bold text-lg">Frase aleatoria:</h3>

            <p class="py-4">"{{ quote.content }}" <br />-{{ quote.author }}</p>

            <div class="modal-action">
              <form method="dialog">
                <button
                  @click="fetchNewQuote"
                  class="bg-[#E6836D] hover:bg-red-200 border-1 rounded-xl p-4"
                >
                  Cerrar
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>

    <div
      class="mr-4 ml-4 mt-4 pr-10 relative flex-grow flex flex-row text-2xl text-white bg-[#E6836D] hover:bg-red-200 p-4 border-0 rounded-md w-auto h-auto"
    >
      <p class="text-lg text-left mr-2">Escuchar podcasts</p>
      <div class="absolute right-2 ml-2">
        <RouterLink
          :to="{ path: 'home/selected-podcast/1457956865' }"
          class="flex pl-16 rounded-lg"
        >
          <IconoFlecha class="ml-4 rounded-lg hover:bg-red-300 ml-16" />
        </RouterLink>
      </div>
    </div>
    <h4 class="text-lg text-stone-500 pt-6 bg-[#FFEEE5] w-screen grid place-content-center">
      Te podría interesar...
    </h4>

    <div class="flex w-screen bg-[#FFEEE5] justify-center pt-8">
      <div
        class="carousel carousel-center object-cover w-full lg:w-[1024px] h-64 p-4 space-x-4 bg-neutral rounded-box mb-16"
      >
        <div v-for="video in videos" :key="video.id.videoId" class="carousel-item">
          <div class="flex flex-col items-center">
            <a
              :href="'https://www.youtube.com/watch?v=' + video.id.videoId"
              target="_blank"
              class="w-full"
            >
              <img
                :src="video.snippet.thumbnails.high.url"
                alt="Video"
                class="rounded-box w-auto h-48 object-cover"
              />
              <div>
                <p class="w-64 text-wrap">{{ video.snippet.title }}</p>
              </div>
            </a>
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
import fetchRandomVideos from './../../../composables/randomVideos';
import fetchRandomQuote from './../../../composables/randomQuote';

// Iconos
import IconoFlecha from './../../../components/icons/IconArrowRight.vue';
import IconoMapa from '@/assets/icons/ComponentsIcons/IconoMapa.vue';
import IconoCorazon from '@/assets/icons/ComponentsIcons/IconoCorazon.vue';
import IconoTelefono from '@/assets/icons/ComponentsIcons/IconoTelefono.vue';
import IconoFrases from '@/assets/icons/ComponentsIcons/IconoFrases.vue';

// Define el tipo de videos
interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}
interface Quote {
  content: string;
  author: string;
}

const videos = ref<YouTubeVideo[]>([]);
const quote = ref<Quote>({ content: '', author: '' });

console.log(quote);

onMounted(async () => {
  try {
    const fetchedVideos = await fetchRandomVideos();
    videos.value = fetchedVideos;
    const fetchedQuotes = await fetchRandomQuote();
    quote.value = fetchedQuotes;
  } catch (error) {
    console.error('Error al obtener los videos:', error);
  }
});

const fetchNewQuote = async () => {
  try {
    const fetchedQuote = await fetchRandomQuote();
    quote.value = fetchedQuote;
  } catch (error) {
    console.error('Error al obtener la frase:', error);
  }
};
</script>
