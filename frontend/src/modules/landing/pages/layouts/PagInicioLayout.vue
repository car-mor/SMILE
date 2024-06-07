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
          <img
            class="w-11 h-auto rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="user photo"
          />
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
  <div class="fixed z-40">
    <div class="xl:hidden relative bg-none h-16 w-screen py-16">
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
        <h1>Nombre</h1>
        <h4>username</h4>
      </ul>
    </div>
  </div>

  <main class="ml-0 flex-grow h-screen w-screen absolute z-30">
    <RouterView class="z-40" />
  </main>
  <div
    class="hidden xl:flex flex-col fixed right-0 top-0 h-full w-1/4 bg-white rounded-l-[22px] z-40 p-4"
  >
    <!-- Contenido del panel lateral para pantallas grandes -->
    <h1>Nombre</h1>
    <h5>Username</h5>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
//iconos
import IconoInicio from './../../../../assets/icons/SidebarIcons/IconoInicio.vue';
import IconoChats from './../../../../assets/icons/SidebarIcons/IconoChat.vue';
import IconoPublicaciones from './../../../../assets/icons/SidebarIcons/IconoPosts.vue';
import IconoEspecialistas from './../../../../assets/icons/SidebarIcons/IconoEspecialistas.vue';
import IconoActividades from './../../../../assets/icons/SidebarIcons/IconoActividades.vue';
import IconoPodcasts from './../../../../assets/icons/SidebarIcons/IconoPodcasts.vue';
import IconoMenu from './../../../../assets/icons/ComponentsIcons/IconoMenu.vue';
import IconLogout from '@/components/icons/IconLogout.vue';
import IconoBarraDerecha from '@/assets/icons/ComponentsIcons/IconoBarraDerecha.vue';

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
</script>
