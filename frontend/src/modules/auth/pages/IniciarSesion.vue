<template>
  <!-- component -->
  <div class="bg-[#FFEEE5] flex flex-col justify-center items-center w-full h-full absolute">
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
      <form @submit.prevent="iniciarSesion" class="flex flex-col items-center">
        <!-- Username Input -->
        <div class="mb-4 w-full">
          <label for="username" class="block text-gray-600 mb-2"
            >correo electrónico</label
          >
          <input
            type="text"
            id="username"
            v-model="usuario"
            name="username"
            placeholder="Introduce tu correo"
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
            v-model="password"
            name="password"
            placeholder="Introduce tu contraseña"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500"
            autocomplete="off"
          />
        </div>

        <!-- Forgot Password Link -->
        <div class="mb-6 w-full text-right text-[#E6836D]">
          <a href="#" class="hover:underline">¿Olvidaste tu contraseña?</a>
        </div>
        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-[#E6836D] hover:bg-red-300 text-white font-semibold rounded-md py-2 px-4"
        >
          Iniciar Sesión
        </button>
      </form>
      <!-- Sign up Link -->
      <div class="mt-6 text-[#E6836D] text-center">
        <RouterLink class="hover:underline" to="/create-account">Crear Cuenta</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { apiFromBackend } from "@/helpers/ApiFromBackend"
import { isThisTypeNode } from "typescript"
import Swal from "sweetalert2"
import { ref } from 'vue'
import Cookies from 'js-cookie'

export default{
  name: "inicioSesion",
  data() {
    return{
      usuario: "",
      password: "",
    }
  },
  created(){
    const jwtToken = Cookies.get('jwt');
    if (jwtToken) {
      this.$router.push({name:"home"})
    } else {
      console.log('La cookie jwt no tiene valor o no existe.');
    }
  },
  computed: {
    isFormEmpty(){
      return !isThisTypeNode.usuario || !this.password
    },
  },
  methods:{
    async iniciarSesion(){
      try{
        const response = await apiFromBackend.post("/api/authenticator/login",{
          "Correo": this.usuario,
          "Contrasena": this.password,
        })
        if(response.data.status === 401){
          Swal.fire({
            title: 'Oops!',
            text: response.data.error,
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
        else{
          this.obtener()
          console.log(response);
          this.$router.push({name:"home"})
        }
      }
      
      catch({response}){
        Swal.fire({
            title: 'Oops!',
            text: response,
            icon: 'error',
            confirmButtonText: 'OK'
          })
      }
    },
    async obtener(){
      try{
        const response = await apiFromBackend.post("/api/authenticator/usuarioLogueado",{
          token:Cookies.get('jwt')
        })
          console.log(response);
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
  }
  
}

</script>