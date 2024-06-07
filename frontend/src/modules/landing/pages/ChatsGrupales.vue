<template>
  <div class="h-screen xl:w-3/4 w-screen absolute bg-[#FFEEE5] flex flex-col items-center">
    <div class="mt-24 text-center flex flex-col items-center">
      <h1 class="text-5xl w-auto sm:w-[500px] md:w-[640px] text-stone-500">Chats sugeridos</h1>
      <div class="flex flex-col md:flex-row mt-12 justify-center md:mt-1"></div>
    </div>
  </div>
  <main>
    <RouterView />
  </main>
</template>
