import { createRouter, createWebHashHistory } from 'vue-router';
import LandingPage from '@/modules/landing/pages/layouts/LandingLayout.vue';
import IniciarSesion from '@/modules/auth/pages/IniciarSesion.vue';
import DescubrePodcasts from '@/modules/landing/subpages/DescubrePodcasts.vue';
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    //Landing
    {
      path: '/',
      name: 'landing',
      component: LandingPage, //Parte de carga inicial
    },
    {
      path: '/about',
      name: 'about',
      redirect: { name: 'about-us' },
      component: () => import('@/modules/landing/pages/layouts/AcercaDeLayout.vue'),
      children: [
        {
          path: 'about-us',
          name: 'about-us',
          component: () => import('@/modules/landing/pages/SobreNosotros.vue'),
        },
      ],
    },
    {
      path: '/home',
      redirect: { name: 'home-begin' },
      name: 'home',
      component: () => import('@/modules/landing/pages/layouts/PagInicioLayout.vue'),
      children: [
        {
          path: 'home-begin',
          name: 'home-begin',
          component: () => import('@/modules/landing/pages/PagInicio.vue'),
        },
        {
          path: 'chats',
          name: 'chats',
          component: () => import('@/modules/landing/pages/ChatsGrupales.vue'),
        },
        {
          path: 'posts',
          name: 'posts',
          component: () => import('@/modules/landing/pages/ExperienciasPublicaciones.vue'),
        },
        {
          path: 'find-specialists',
          name: 'find-specialists',
          component: () => import('@/modules/landing/pages/EncontrarEspecialista.vue'),
        },
        {
          path: 'activities',
          name: 'activities',
          component: () => import('@/modules/landing/pages/ActRecreativas.vue'),
        },
        {
          path: 'podcasts',
          name: 'podcasts',
          component: () => import('@/modules/landing/pages/PodcastVideos.vue'),
        },
        {
          path: 'explore-podcasts',
          name: 'explore-podcasts',
          component: DescubrePodcasts,
        },
        {
          path: 'selected-podcast/:itunesId',
          name: 'selected-podcast',
          component: () => import('@/modules/landing/subpages/PodcastSeleccionado.vue'),
          props: true,
        },
        {
          path: 'chat',
          name: 'chat',
          component: () => import('@/modules/landing/pages/Chats.vue'),
        },
        {
          path: '/mente-equilibrio',
          name: 'mente-equilibrio',
          component: () => import('@/modules/landing/pages/MenteEquilibrio.vue'),
        },
        {
          path: '/laberinto-emocional',
          name: 'laberinto-emocional',
          component: () => import('@/modules/landing/pages/LaberintoEmocional.vue'),
        },
        {
          path: '/elevacion-animica',
          name: 'elevacion-animica',
          component: () => import('@/modules/landing/pages/ElevacionAnimica.vue'),
        },
        {
          path: '/resiliencia-rapida',
          name: 'resiliencia-rapida',
          component: () => import('@/modules/landing/pages/ResilienciaRapida.vue'),
        },
        
      ],
    },

    //Auth
    {
      path: '/login',
      name: 'login',
      //component: () => import('@/modules/landing/pages/IniciarSesion.vue'),
      component: IniciarSesion,
    },
    {
      path: '/create-account',
      name: 'create-account',
      component: () => import('@/modules/auth/pages/CrearCuenta.vue'),
    },
    
    

    //Not foubd
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/modules/common/NotFound.vue'),
    },
  ],
});

export default router;
