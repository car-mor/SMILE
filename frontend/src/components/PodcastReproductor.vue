<template>
  <div class="flex w-full h-full items-center justify-center bg-[#FFEEE5] mb-16">
    <div class="w-2/3">
      <div
        class="mt-8 bg-none border-[#E6836D] bg-red-300 border-4 rounded-2xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8 items-center"
      >
        <div class="flex items-center space-x-4">
          <img
            :src="podcast.image"
            alt="Podcast Image"
            width="120"
            height="120"
            class="flex-none rounded-lg bg-red-50"
            loading="lazy"
          />
          <div class="min-w-0 flex-auto space-y-1 font-semibold">
            <p class="text-stone-600 text-md leading-6">
              <abbr title="Podcast">Podcast:</abbr>
            </p>
            <h2 class="text-black text-xl leading-6 truncate">
              {{ podcast.title }}
            </h2>
            <p class="text-stone-600 text-md leading-6">
              <abbr title="Autor(a)">Autor(a):</abbr>
            </p>
            <p class="text-slate-900 dark:text-slate-50 text-lg">{{ podcast.author }}</p>
            <p class="text-stone-600 text-md leading-6">
              <abbr title="Episodio">Episodio:</abbr>
            </p>
            <h4 class="text-stone-500 text-xl leading-6 truncate">{{ episodeTitle }}</h4>
          </div>
        </div>
        <div class="space-y-2">
          <div class="relative" @click="seek">
            <div class="bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden cursor-pointer">
              <div
                class="bg-red-400 w-0 h-2"
                role="progressbar"
                aria-label="music progress"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div
              class="ring-red-400 ring-2 absolute left-0 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow"
            >
              <div
                class="w-1.5 h-1.5 bg-red-400 rounded-full ring-1 ring-inset ring-slate-900/5"
              ></div>
            </div>
          </div>
          <div class="flex justify-between text-sm leading-6 font-medium tabular-nums">
            <div class="current-time text-slate-500 dark:text-slate-100">0:00</div>
            <div class="duration-time text-slate-500 dark:text-slate-400">--:--</div>
          </div>
        </div>
        <div class="space-y-2">
          <audio ref="audioElement" :src="audioUrl || ''" class="w-full" hidden></audio>
        </div>
        <div class="flex items-center justify-between">
          <button @click="previousEpisode" class="p-2">
            <IconoAnterior />
          </button>
          <button @click="rewind10Seconds" class="p-2">
            <IconoRewind />
          </button>
          <button
            @click="togglePlayPause"
            class="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 flex-none w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center"
            aria-label="Pause"
          >
            <svg v-if="isPlaying" width="30" height="32" fill="currentColor">
              <rect x="6" y="4" width="4" height="24" rx="2" />
              <rect x="20" y="4" width="4" height="24" rx="2" />
            </svg>
            <svg v-else width="30" height="32" fill="currentColor">
              <path d="M6 4l18 12L6 28V4z" />
            </svg>
          </button>
          <button @click="forward10Seconds" class="p-2">
            <IconoForward />
          </button>
          <button @click="nextEpisode" class="p-2">
            <IconoSiguiente />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import IconoSiguiente from './../assets/icons/ComponentsIcons/IconoSiguiente.vue';
import IconoAnterior from './../assets/icons/ComponentsIcons/IconoAnterior.vue';
import IconoForward from './../assets/icons/ComponentsIcons/IconoForward.vue';
import IconoRewind from './../assets/icons/ComponentsIcons/IconoRewind.vue';

interface Podcast {
  title: string;
  author: string;
  image: string;
}

interface Episode {
  title: string;
  enclosureUrl: string;
}

const props = defineProps<{
  podcast: Podcast;
  episodes: Episode[];
  podcastTitle: string;
  podcastAuthor: string;
  podcastImage: string;
  episode: Episode;
}>();

const currentEpisodeIndex = ref<number>(0);
const audioUrl = ref<string | null>(null);
const episodeTitle = ref<string | null>(null);
const audioElement = ref<HTMLAudioElement | null>(null);
const isPlaying = ref<boolean>(false);

watch(
  () => props.episodes,
  (newEpisodes) => {
    if (newEpisodes.length > 0) {
      loadEpisode(0);
    }
  },
  { immediate: true },
);

function loadEpisode(index: number) {
  if (index >= 0 && index < props.episodes.length) {
    const wasPlaying = isPlaying.value;
    if (audioElement.value) {
      audioElement.value.pause(); // Pausar el audio antes de cargar el nuevo episodio
      audioElement.value.currentTime = 0; // Resetear el tiempo actual
    }

    const episode = props.episodes[index];
    audioUrl.value = episode.enclosureUrl;
    episodeTitle.value = episode.title;
    currentEpisodeIndex.value = index;

    if (audioElement.value) {
      audioElement.value.load();

      const progressBar = document.querySelector('.bg-red-400') as HTMLElement;
      const progressBall = document.querySelector('.ring-red-400') as HTMLElement;
      const currentTimeDisplay = document.querySelector('.current-time') as HTMLElement;
      const durationDisplay = document.querySelector('.duration-time') as HTMLElement;

      if (progressBar && progressBall && currentTimeDisplay && durationDisplay) {
        progressBar.style.width = `0%`;
        progressBall.style.left = `0%`;
        currentTimeDisplay.textContent = '0:00';
        durationDisplay.textContent = '--:--';
      }

      audioElement.value.addEventListener('loadedmetadata', () => {
        if (audioElement.value && durationDisplay) {
          const duration = audioElement.value.duration;
          durationDisplay.textContent = isNaN(duration) ? '--:--' : formatTime(duration);
        }
      });

      if (wasPlaying) {
        audioElement.value.play();
      }
    }
  } else {
    alert('No hay más episodios disponibles.');
  }
}

function previousEpisode() {
  if (currentEpisodeIndex.value > 0) {
    if (audioElement.value) {
      audioElement.value.pause();
    }
    isPlaying.value = false;
    loadEpisode(currentEpisodeIndex.value - 1);
  } else {
    alert('Este es el primer episodio.');
  }
}

function nextEpisode() {
  if (currentEpisodeIndex.value < props.episodes.length - 1) {
    if (audioElement.value) {
      audioElement.value.pause();
    }
    isPlaying.value = false;
    loadEpisode(currentEpisodeIndex.value + 1);
  } else {
    alert('Este es el último episodio.');
  }
}

function rewind10Seconds() {
  if (audioElement.value) {
    audioElement.value.currentTime -= 10;
  }
}

function forward10Seconds() {
  if (audioElement.value) {
    audioElement.value.currentTime += 10;
  }
}

function togglePlayPause() {
  if (audioElement.value) {
    if (audioElement.value.paused) {
      audioElement.value.play();
      isPlaying.value = true;
    } else {
      audioElement.value.pause();
      isPlaying.value = false;
    }
  }
}

function updateProgress() {
  if (audioElement.value) {
    const progressBar = document.querySelector('.bg-red-400') as HTMLElement;
    const progressBall = document.querySelector('.ring-red-400') as HTMLElement;
    const currentTimeDisplay = document.querySelector('.current-time') as HTMLElement;
    const durationDisplay = document.querySelector('.duration-time') as HTMLElement;

    audioElement.value.addEventListener('timeupdate', () => {
      if (
        progressBar &&
        progressBall &&
        currentTimeDisplay &&
        durationDisplay &&
        audioElement.value
      ) {
        const currentTime = audioElement.value.currentTime;
        const duration = audioElement.value.duration;
        const progressPercent = (currentTime / duration) * 100;

        progressBar.style.width = `${progressPercent}%`;
        progressBall.style.left = `calc(${progressPercent}% - 0.5rem)`;
        currentTimeDisplay.textContent = formatTime(currentTime);

        if (isNaN(duration)) {
          durationDisplay.textContent = '--:--';
        } else {
          durationDisplay.textContent = formatTime(duration);
        }
      }
    });
  }
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function seek(event: MouseEvent) {
  if (audioElement.value) {
    const progressBar = event.currentTarget as HTMLElement;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const width = rect.width;
    const percent = offsetX / width;
    const duration = audioElement.value.duration;
    audioElement.value.currentTime = percent * duration;
  }
}

onMounted(() => {
  if (audioElement.value) {
    updateProgress();
  }
});
</script>
