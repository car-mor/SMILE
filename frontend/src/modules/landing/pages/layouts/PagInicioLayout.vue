<template>
  <nav class="fixed top-0 w-full absolute bg-none">
    <div class="flex items-center justify-start rtl:justify-end">
      <button
        @click="toggleSidebar"
        aria-controls="logo-sidebar"
        type="button"
        class="inline-flex items-center p-2 text-sm rounded-lg sm:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200 dark:focus:ring-red-200 z-50 ml-4"
      >
        <!-- <span class="sr-only">Open sidebar</span> -->
        <IconoMenu :class="[isMenuActive ? 'fill-white' : 'fill-[#E6836D]']" />
      </button>

      <div class="ml-auto flex items-center">
        <button
          type="button"
          class="flex text-sm bg-red-100 rounded-full focus:ring-6 focus:ring-red-300 hover:ring-4 hover:ring-red-200 mr-4 mt-4 z-50"
          aria-expanded="false"
        >
          
        </button>
      </div>
    </div>
  </nav>

  <aside
    :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    id="logo-sidebar"
    class="fixed z-40 w-auto h-full pt-16 transition-transform bg-[#E6836D] border-r border-bg-[#E6836D] sm:translate-x-0 rounded-r-[23px]"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto">
      <ul class="space-y-6 font-medium">
        <li>
          <RouterLink
            :to="{ name: 'home-begin' }"
            class="flex items-center p-1.5 rounded-lg hover:bg-red-300 group"
            @click="closeSidebar"
          >
            <IconoInicio />
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'chats' }"
            class="flex items-center p-2 rounded-lg hover:bg-red-300 group"
            @click="closeSidebar"
          >
            <IconoChats />
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'posts' }"
            class="flex items-center p-2 rounded-lg hover:bg-red-300 group"
            @click="closeSidebar"
          >
            <IconoPublicaciones />
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'find-specialists' }"
            class="flex items-center p-2 rounded-lg hover:bg-red-300 group"
            @click="closeSidebar"
          >
            <IconoEspecialistas />
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'activities' }"
            class="flex items-center p-2 rounded-lg hover:bg-red-300 group"
            @click="closeSidebar"
          >
            <IconoActividades />
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'podcasts' }"
            class="flex items-center p-2 rounded-lg hover:bg-red-300 group"
            @click="closeSidebar"
          >
            <IconoPodcasts />
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'landing' }"
            class="flex items-center p-2 rounded-lg hover:bg-red-300 group"
            @click="closeSidebar"
          >
            <IconLogout />
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
  <div class="fixed z-40 right-0 top-0">
    <div class="xl:hidden relative h-16 py-16">
      <div class="absolute right-0 bg-white border-2 rounded-l-lg py-2 px-4">
        <label for="my-drawer-1" class="cursor-pointer">
          <IconoBarraDerecha class="drawer-button pr-2" />
        </label>
      </div>
    </div>
  </div>

  <div class="drawer drawer-end absolute z-50">
    <input id="my-drawer-1" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
    </div>
    <div class="drawer-side">
      <label for="my-drawer-1" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul
        class="menu p-4 w-64 sm:w-[340px] md:w-[400px] min-h-full bg-white border-2 rounded-l-[22px]"
      >
        <!-- Sidebar content here -->
        <h4 class="text-lg text-stone-500 text-center">
      Perfil de Usuario
    </h4>
   
    
    <div class="flex justify-center items-center">
        <button
          type="button"
          class="flex bg-red-100 rounded-full focus:ring-6 focus:ring-red-300 hover:ring-4 hover:ring-red-200 mr-4 mt-4 z-50"
          aria-expanded="false"
        >
        <img
            class="w-12 h-12 rounded-full object-cover items-center"
            src="@/assets/imgs/user_image.jpeg"
            alt="user photo"
          />
          <br>
          <!-- src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" -->
        </button>
      </div>
    <div class="text-left">
    <h1 class="text-lg text-stone-500">
      Nombre: {{datos.nombre}}
    </h1>
    <h1 class="text-lg text-stone-500">
      Apellido: {{datos.apellido}}
    </h1>
    <h1 class="text-lg text-stone-500">
      Email: {{datos.correo}}
    </h1>
    </div>
    <br>
    <hr style="background-color: #fff; border-top: 1px solid #8c8b8b;">
    <h4 class="text-lg text-stone-500 text-center">
      Mis chats
    </h4>
    <br><br><br><br><br><br><br><br><br><br><br>
    <hr style="background-color: #fff; border-top: 1px solid #8c8b8b;">
    <h4 class="text-lg text-stone-500 text-center">
      Explorar actividades
    </h4>
    <div class="carousel flex justify-center items-center relative">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="carousel-item relative w-full"
      :class="{ 'block': index === currentSlide, 'hidden': index !== currentSlide }"
    >
      <div class="flex justify-center items-center h-full">
        <img :src="slide.img" class="w-48" />
      </div>
      <div class="absolute left-1 right-1 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button @click="prevSlide" class="btn btn-circle">❮</button>
        <button @click="nextSlide" class="btn btn-circle">❯</button>
      </div>
    </div>
  </div>
      </ul>
    </div>
  </div>

  <main class="ml-0 flex-grow h-screen w-screen bg-[#FFEEE5] absolute z-30">
    <RouterView class="z-40" />
  </main>
  <div
    class="hidden xl:flex flex-col fixed right-0 top-0 h-full w-1/4 bg-white rounded-l-[22px] z-40 p-4 flex"
  >
    <!-- Contenido del panel lateral para pantallas grandes -->
    <h4 class="text-lg text-stone-500 text-center">
      Perfil de Usuario
    </h4>
    <div class="flex justify-center items-center">
        <button
          type="button"
          class="flex bg-red-100 rounded-full focus:ring-6 focus:ring-red-300 hover:ring-4 hover:ring-red-200 mr-4 mt-4 z-50"
          aria-expanded="false"
        >
        <img style="width: 120px; height: 120px; border-radius: 100%" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user-photo"/>
          <br>
          <!-- src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" -->
        </button>
    </div>
    <div class="text-left">
      <h1 class="text-lg text-stone-500">Nombre: {{ datos.nombre }}</h1>
      <h1 class="text-lg text-stone-500">Apellido: {{ datos.apellido }}</h1>
      <h1 class="text-lg text-stone-500">Email: {{ datos.correo }}</h1>
    </div>
    <br>
    <hr style="background-color: #fff; border-top: 1px solid #8c8b8b;">
    <h4 class="text-lg text-stone-500 text-center">
      Mis chats
    </h4>
    <br><br><br><br><br><br>
    <hr style="background-color: #fff; border-top: 1px solid #8c8b8b;">
    
    <!-- CARRUSEL ACTIVIDADES PANTALLA DE USUARIO-->
    <h4 class="text-lg text-stone-500 text-center">
      Explorar actividades
    </h4>
    
  
    <div class="carousel flex justify-center items-center relative">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="carousel-item relative w-full"
      :class="{ 'block': index === currentSlide, 'hidden': index !== currentSlide }"
    >
      <div class="flex justify-center items-center h-full">
        <img :src="slide.img" class="w-48" />
      </div>
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button @click="prevSlide" class="btn btn-circle">❮</button>
        <button @click="nextSlide" class="btn btn-circle">❯</button>
      </div>
    </div>
  </div>
    

  </div>
</template>

<script setup>
import { ref, reactive, onMounted  } from 'vue';
import { RouterLink } from 'vue-router';
import { apiFromBackend } from "./../../../../helpers/ApiFromBackend.js"
import Cookies from 'js-cookie'
import Swal from "sweetalert2"

// iconos
import IconoInicio from './../../../../assets/icons/SidebarIcons/IconoInicio.vue';
import IconoChats from './../../../../assets/icons/SidebarIcons/IconoChat.vue';
import IconoPublicaciones from './../../../../assets/icons/SidebarIcons/IconoPosts.vue';
import IconoEspecialistas from './../../../../assets/icons/SidebarIcons/IconoEspecialistas.vue';
import IconoActividades from './../../../../assets/icons/SidebarIcons/IconoActividades.vue';
import IconoPodcasts from './../../../../assets/icons/SidebarIcons/IconoPodcasts.vue';
import IconoMenu from './../../../../assets/icons/ComponentsIcons/IconoMenu.vue';
import IconLogout from '@/components/icons/IconLogout.vue';
import IconoBarraDerecha from '@/assets/icons/ComponentsIcons/IconoBarraDerecha.vue';


//AL iniciar la pagina
onMounted(async () => {
  obtenerInfo()
})

//Valores de usuario

const obtenerInfo = async() =>{
  
  try{
      const response = await apiFromBackend.post("/api/authenticator/usuarioLogueado",{
        token:Cookies.get('jwt')
      })
        console.log(response);
        datos.nombre=response.data.Nombre
        datos.apellido=response.data.Apellido
        datos.correo=response.data.Correo
        console.log(datos.nombre);
    }
    catch({response}){
      Swal.fire({
          title: 'Oops!',
          text: response,
          icon: 'error',
          confirmButtonText: 'OK'
        })
    }
 
}


const datos = reactive({
  nombre: '',
  apellido: '',
  correo: ''
});


const sidebarOpen = ref(false);
const isMenuActive = ref(false);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
  isMenuActive.value = !isMenuActive.value;
};

const closeSidebar = () => {
  sidebarOpen.value = false;
  isMenuActive.value = false;
};

// Importar imágenes
import rompecabezas from '@/assets/imgs/rompecabezas.png';
import concentracion from '@/assets/imgs/concentracion.png';
import diversion from '@/assets/imgs/diversion.png';

// Carrusel
const slides = ref([
  { img: rompecabezas },
  { img: concentracion },
  { img: diversion },
]);

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};
</script>

<style scoped>
.carousel-item {
  display: none;
}
.carousel-item.block {
  display: block;
}
</style>