<template>
  <!-- component -->

  <div class="bg-red-50 flex flex-col justify-center items-center min-h-screen w-full h-full">
    <!-- Image -->
    <div class="h-full mt-6">
      <img
        src="./../../../assets/imgs/logoSinFondo.png"
        alt="Placeholder Image"
        class="w-80 h-auto mt-4"
      />
    </div>
    <!-- Login Form -->
    <div class="flex flex-col p-8 w-full h-full max-w-md mt-16">
      <h1 class="text-4xl font-semibold mb-4 text-stone-500 text-center">Crea una cuenta</h1>

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
        <!-- Mail Input -->
        <div class="mb-4 w-full">
          <label for="mail" class="block text-gray-600 mb-2">Correo electrónico</label>
          <input
            type="email"
            id="mail"
            name="mail"
            placeholder="Introduce tu correo electrónico"
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

        <!-- Birth Input -->
        <div class="mb-4 w-full">
          <label for="birth" class="block text-gray-600 mb-2">Fecha de nacimiento</label>
          <input
            type="date"
            id="birth"
            name="birth"
            placeholder="Introduce tu fecha de nacimiento"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500"
            autocomplete="off"
          />
        </div>

        <!-- Forgot Password Link -->
        <div class="mb-6 w-full text-right text-red-300">
          <h1 class="text-md font-semibold mb-4 text-stone-500 text-right">
            ¿Ya estás registrado?
            <span class="hover:underline hover:text-red-300"
              ><RouterLink class="hover:underline" to="/login">Ingresa aquí</RouterLink></span
            >
          </h1>
        </div>
        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-red-200 hover:bg-red-300 text-white font-semibold rounded-md py-2 px-4"
        >
          Crear Cuenta
        </button>
      </form>
    </div>
  </div>
</template>
