<template>
  <!-- component -->
  <div class="bg-red-50 flex flex-col justify-center items-center w-full h-full absolute">
    <!-- Image -->
    <div class="h-auto mt-6">
      <img
        src="./../../../assets/imgs/logoSinFondo.png"
        alt="Placeholder Image"
        class="w-80 h-auto mt-4"
      />
    </div>
    <!-- Login Form -->
    <div class="p-8 w-full max-w-md mt-16">
      <h1 class="text-2xl font-semibold mb-4 text-stone-500 text-center">Inicio de sesión</h1>
      <form action="#" method="POST" class="flex flex-col items-center">
        <!-- Username Input -->
        <div class="mb-4 w-full">
          <label for="username" class="block text-gray-600 mb-2"
            >Nombre de usuario/correo electrónico</label
          >
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Introduce tu nombre de usuario o correo"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500"
            autocomplete="off"
          />
        </div>
        <!-- Password Input -->
        <div class="mb-4 w-full">
          <label for="password" class="block text-gray-600 mb-2">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Introduce tu contraseña"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500"
            autocomplete="off"
          />
        </div>

        <!-- Forgot Password Link -->
        <div class="mb-6 w-full text-right text-red-300">
          <a href="#" class="hover:underline">¿Olvidaste tu contraseña?</a>
        </div>
        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-red-200 hover:bg-red-300 text-white font-semibold rounded-md py-2 px-4"
        >
          Iniciar Sesión
        </button>
      </form>
      <!-- Sign up Link -->
      <div class="mt-6 text-red-300 text-center">
        <RouterLink class="hover:underline" to="/create-account">Crear Cuenta</RouterLink>
      </div>
    </div>
  </div>
</template>
