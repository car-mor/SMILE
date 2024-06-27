<template>
    <div class="h-screen xl:w-3/4 w-screen absolute bg-[#FFEEE5] flex flex-col items-center">
      <div class="mt-10 text-center flex flex-col items-center">
        <h1 class="lg:pt-0 pt-14 text-5xl sm:w-[500px] md:w-[640px] text-stone-500">
            Sección Elevación Anímica
        </h1>
        <div v-if="!showIframe">
          <h4 class="text-2xl text-stone-500 pt-6 bg-[#FFEEE5] font-bold text-justify ml-24">
            ¿Sabías qué...?
          </h4>
          <h4 class="text-lg text-stone-500 pt-6 bg-[#FFEEE5] text-justify ml-24 mr-32">
            Los Juegos de Relajación son efectivos para reducir el estrés y la ansiedad, ayudando a los usuarios a centrarse en el presente y practicar técnicas de mindfulness.
            <br>
            Los juegos de Arte y Creatividad ayudan a manejar el estrés y las emociones negativas, proporcionando una salida positiva para los sentimientos.
          </h4>
  
          <section>
            <div class="container px-6 py-10 mx-auto  bg-[#FFEEE5]">
              <div class="grid grid-cols-1 gap-8 lg:ml-16 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                <div class="w-full" v-for="(game, index) in games" :key="index">
                  <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600 flex items-center justify-center cursor-pointer" @click="showGame(game.iframe)">
                    <img :src="game.image" :alt="game.name" class="max-w-full max-h-full">
                  </div>
                  <h4 class="text-lg text-stone-500 pt-6 bg-[#FFEEE5] font-bold text-center">
                    {{ game.name }}
                  </h4>
                  <h1 class="w-56 h-2 mt-4 bg-gray-400 rounded-lg dark:bg-gray-100"></h1>
                </div>
              </div>
            </div>
          </section>
        </div>
  
        <div v-else class="w-full h-96 mt-16 bg-gray-300 rounded-xl dark:bg-gray-600 flex items-center justify-center">
          <iframe :src="currentIframe" allow="autoplay; fullscreen; microphone" scrolling="no" webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" allowfullscreen="true" style="border: 0px; background-color: transparent; width: 100%; height: 100%;" frameborder="0"></iframe>
        </div>
  
        <button v-if="showIframe" @click="closeIframe" class="mt-4 px-4 py-2 bg-[#E6836D] text-white rounded hover:bg-red-200">
          Volver a la selección de juegos
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import piano from '@/assets/imgs/games/piano.jpg'
  import zen1 from '@/assets/imgs/games/zen1.jpg'
  import zen2 from '@/assets/imgs/games/zen2.jpg'
  import colorear from '@/assets/imgs/games/colorear.jpg'
  
  export default {
    data() {
      return {
        showIframe: false,
        currentIframe: '',
        games: [
          {
            name: 'Piano tiles',
            image: piano,
            iframe: 'https://html5.gamedistribution.com/01916e94606344f5b0620fd8e76d2127/'
          },
          {
            name: 'Zen 1',
            image: zen1,
            iframe: 'https://html5.gamedistribution.com/f6b626122cd74a15a3c3b3613ffd58d8/'
          },
          {
            name: 'Zen 2',
            image: zen2,
            iframe: 'https://html5.gamedistribution.com/61cc1e111cf64ce0ad3180919cc93e9e/'
          },
          {
            name: 'Colorear',
            image: colorear,
            iframe: 'https://html5.gamedistribution.com/944ef4b4956a441b915d1f62ee8c2c12/'
          }
        ]
      }
    },
    methods: {
      showGame(iframe) {
        this.showIframe = true;
        this.currentIframe = iframe;
      },
      closeIframe() {
        this.showIframe = false;
        this.currentIframe = '';
      }
    }
  }
  </script>
  
  <style>
  /* No se necesitan estilos adicionales para centrar los h4 con Tailwind */
  </style>
  