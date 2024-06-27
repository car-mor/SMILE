<template>
  <div class="h-screen xl:w-3/4 w-screen absolute bg-[#FFEEE5] flex flex-col items-center">
    <div class="mt-14 text-center flex flex-col items-center">
      <h1 class="text-5xl w-auto sm:w-[500px] md:w-[640px] text-stone-500">Explorar grupos</h1>
      <h6 class="text-xl w-auto sm:w-[500px] md:w-[640px] text-stone-500 pt-10">
        ¡Encuentra un grupo de chat de acuerdo a tus necesidades!
        <br>
        Selecciona un grupo
      </h6>


      <div class="hidden lg:flex flex-col mt-12 ml-8 items-center md:mt-1">
        <div class="flex flex-row">
          <div class="flex justify-center pt-8 space-x-16">
            <div>
              <img 
                class="h-48" src="@/assets/imgs/groups/gruposAmigos.png" 
                @click="entrarChat1" 
                style="cursor: pointer;"
              />
            </div>
            <div>
              <img 
                class="h-48" src="@/assets/imgs/groups/gruposAnsiedad.png" 
                @click="entrarChat2" 
                style="cursor: pointer;"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-row">
          <div class="flex justify-center pt-8 space-x-6">
            <div>
              <img 
                class="h-48" src="@/assets/imgs/groups/gruposFamilia.png" 
                @click="entrarChat3" 
                style="cursor: pointer;"
              />
            </div>
            <div>
              <img 
                class="h-48" src="@/assets/imgs/groups/gruposDepresion.png" 
                @click="entrarChat4" 
                style="cursor: pointer;"
              />
            </div>
            <div>
              <img 
                class="h-48" src="@/assets/imgs/groups/gruposAcoso.png" 
                @click="entrarChat5" 
                style="cursor: pointer;"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Carrusel vertical para pantallas pequeñas -->
      
      <div class="lg:hidden mt-12 w-screen h-3/4 bg-[#FFEEE5] absolute flex justify-center mt-48">
        <div class="carousel carousel-vertical rounded-box w-3/4">
          <div class="carousel-item flex justify-center">
            
            <div>
              
              <img 
                class="h-48" src="@/assets/imgs/groups/gruposAmigos.png" 
                @click="entrarChat1" 
                style="cursor: pointer;"
              />
            </div>
          </div>
          <div class="carousel-item flex justify-center">
            <div>
              <img 
                class="h-48" src="@/assets/imgs/groups/gruposAnsiedad.png" 
                @click="entrarChat2" 
                style="cursor: pointer;"
              />
            </div>
          </div>
          <div class="carousel-item flex justify-center">
            <div>
              <img 
                class="h-48" src="@/assets/imgs/groups/gruposFamilia.png" 
                @click="entrarChat3" 
                style="cursor: pointer;"
              />
            </div>
          </div>
          <div class="carousel-item flex justify-center mt-10">
            <div>
              <img 
                class="h-48" src="@/assets/imgs/groups/gruposDepresion.png" 
                @click="entrarChat4" 
                style="cursor: pointer;"
              />
            </div>
          </div>
          <div class="carousel-item flex justify-center mt-10 pb-12">
            <div>
              <img 
                class="h-48" src="@/assets/imgs/groups/gruposAcoso.png" 
                @click="entrarChat5" 
                style="cursor: pointer;"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { defineComponent, reactive, ref, onMounted } from 'vue';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import HidePassword from '@/assets/icons/ComponentsIcons/IconoEyesOff.vue';
import ShowPassword from '@/assets/icons/ComponentsIcons/IconoEyesOn.vue';
import { apiFromBackend } from "@/helpers/ApiFromBackend"
import router from "@/router"
import Cookies from 'js-cookie'

const chat = reactive({
  entrarChat:'',
  id:''
})

export const compartidoInfo = reactive({
  entrarChat:'',
  id:''
})

const entrarChat1 = () =>{chat.entrarChat='1'
  entrarChat()};
const entrarChat2 = () =>{chat.entrarChat='2'
  entrarChat()};
const entrarChat3 = () =>{chat.entrarChat='3'
  entrarChat()};
const entrarChat4 = () =>{chat.entrarChat='4'
  entrarChat()};
const entrarChat5 = () =>{chat.entrarChat='5'
  entrarChat()};

onMounted(async () =>{
  try{
    const response = await apiFromBackend.post("/api/authenticator/usuarioLogueado",{
      token:Cookies.get('jwt')
    })
      chat.id=response.data.id
  }
  catch({response}){
    Swal.fire({
        title: 'Oops!',
        text: response,
        icon: 'error',
        confirmButtonText: 'OK'
      })
  }
})

const entrarChat = async () =>{
  try{
    const response = await apiFromBackend.post("/api/miembroGrupo/obtenerMimebroGrupo",{
        "id_Grupo": chat.entrarChat,
        "id_Usuario": ''+chat.id
    })
      console.log(response);
      if(response.data.status===404){
        Swal.fire({
          title: "No estas dentro de este grupo",
          text: "¿Deseas registrarse a este grupo?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Registrar"
        }).then((result) => {
          if (result.isConfirmed) {
            registrar()
          }
        });
      }
  }
  catch(response){
    Swal.fire({
        title: 'Oops!',
        text: response,
        icon: 'error',
        confirmButtonText: 'OK'
      })
  }
}

const registrar = async () =>{
  try{
    const response = await apiFromBackend.post("/api/miembroGrupo/crearMiembroGrupo",{
        "id_Grupo": chat.entrarChat,
        "id_Usuario": ''+chat.id
    })
      console.log(response);
      Swal.fire({
        title: "Registrado",
        text: "Se ha registrado correctamente al grupo",
        icon: "success"
      });
  }
  catch(response){
    Swal.fire({
        title: 'Oops!',
        text: response,
        icon: 'error',
        confirmButtonText: 'OK'
      })
  }
}


</script>

<style>
/* Estilos adicionales si es necesario */
</style>
