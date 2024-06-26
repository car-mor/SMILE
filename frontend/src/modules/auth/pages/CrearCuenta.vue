<template>
  <div class="bg-[#FFEEE5] flex flex-col justify-center items-center min-h-screen w-full h-full">
    <div class="h-full mt-6">
      <img
        src="./../../../assets/imgs/logoSinFondo.png"
        alt="Placeholder Image"
        class="w-80 h-auto mt-4"
      />
    </div>
    <div class="flex flex-col p-8 w-full h-full max-w-md mt-16">
      <h1 class="text-4xl font-semibold mb-4 text-stone-500 text-center">Crea una cuenta</h1>
      <form @submit.prevent="onSubmit" class="flex flex-col items-center">
        <!-- Nombre -->
        <div class="mb-4 w-full">
          <label for="nombre" class="block text-gray-600 mb-2"
            >Nombre (s)</label
          >
          <input
            v-model="form.nombre"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Introduce tu nombre"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500"
            autocomplete="off"
          />
          <span v-if="errors.nombre" class="text-red-500">{{ errors.nombre }}</span>
        </div>

        <!-- Apellido-->
        <div class="mb-4 w-full">
          <label for="apellido" class="block text-gray-600 mb-2"
            >Apellido</label
          >
          <input
            v-model="form.apellido"
            type="text"
            id="apellido"
            name="apellido"
            placeholder="Introduce tu apellido"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500"
            autocomplete="off"
          />
          <span v-if="errors.apellido" class="text-red-500">{{ errors.apellido }}</span>
        </div>
        <!-- Mail Input -->
        <div class="mb-4 w-full">
          <label for="mail" class="block text-gray-600 mb-2">Correo electrónico</label>
          <input
            v-model="form.mail"
            type="email"
            id="mail"
            name="mail"
            placeholder="Introduce tu correo electrónico"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500"
            autocomplete="off"
          />
          <span v-if="errors.mail" class="text-red-500">{{ errors.mail }}</span>
        </div>
        <!-- Password Input -->
        <div class="mb-4 w-full relative">
          <label for="password" class="block text-gray-600 mb-2">Contraseña</label>
          <input
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            id="password"
            name="password"
            placeholder="Introduce tu contraseña"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500"
            autocomplete="off"
          />
          <div class="absolute right-3 top-9 cursor-pointer" @click="toggleShowPassword">
            <component :is="showPassword ? 'HidePassword' : 'ShowPassword'" />
          </div>
          <span v-if="errors.password" class="text-red-500">{{ errors.password }}</span>
          <ul class="mt-2 text-sm text-gray-600">
            <li :class="{ 'text-green-500': passwordValidations.minLength }">
              Mínimo 8 caracteres
            </li>
            <li :class="{ 'text-green-500': passwordValidations.uppercase }">
              Al menos una letra mayúscula
            </li>
            <li :class="{ 'text-green-500': passwordValidations.number }">Al menos un número</li>
            <li :class="{ 'text-green-500': passwordValidations.specialChar }">
              Al menos un carácter especial
            </li>
          </ul>
        </div>
        <!-- Birth Input -->
        <div class="mb-4 w-full">
          <label for="birth" class="block text-gray-600 mb-2">Fecha de nacimiento</label>
          <input
            v-model="form.birth"
            type="date"
            id="birth"
            name="birth"
            placeholder="Introduce tu fecha de nacimiento"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500"
            autocomplete="off"
          />
          <span v-if="errors.birth" class="text-red-500">{{ errors.birth }}</span>
        </div>
        <!-- Forgot Password Link -->
        <div class="mb-6 w-full text-right text-red-300">
          <h1 class="text-md font-semibold mb-4 text-stone-500 text-right">
            ¿Ya estás registrado?
            <span class="hover:underline hover:text-red-300 text-[#E6836D]">
              <RouterLink class="hover:underline" to="/login">Ingresa aquí</RouterLink>
            </span>
          </h1>
        </div>
        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-[#E6836D] hover:bg-red-300 text-white font-semibold rounded-md py-2 px-4"
        >
          Crear Cuenta
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, watch } from 'vue';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import HidePassword from '@/assets/icons/ComponentsIcons/IconoEyesOff.vue';
import ShowPassword from '@/assets/icons/ComponentsIcons/IconoEyesOn.vue';
import { apiFromBackend } from "@/helpers/ApiFromBackend"
import router from "@/router"

export default defineComponent({
  components: {
    HidePassword,
    ShowPassword,
  },
  setup() {
    const form = reactive({
      nombre: '',
      apellido: '',
      mail: '',
      password: '',
      birth: '',
    });

    const errors = reactive({});
    const showPassword = ref(false);

    const passwordValidations = reactive({
      minLength: false,
      uppercase: false,
      number: false,
      specialChar: false,
    });

    const schema = yup.object().shape({
      mail: yup.string().email('El correo no es válido').required('El correo es obligatorio'),
      password: yup.string().required('La contraseña es obligatoria'),
    });

    const validatePassword = (password) => {
      passwordValidations.minLength = password.length >= 8;
      passwordValidations.uppercase = /[A-Z]/.test(password);
      passwordValidations.number = /[0-9]/.test(password);
      passwordValidations.specialChar = /[\W_]/.test(password);
    };

    watch(
      () => form.password,
      (newPassword) => {
        validatePassword(newPassword);
      },
    );

    const validateForm = async () => {
      try {
        await schema.validate(form, { abortEarly: false });
        return true;
      } catch (err) {
        err.inner.forEach((validationError) => {
          errors[validationError.path] = validationError.message;
        });
        return false;
      }
    };

    const checkAge = () => {
      const birthDate = new Date(form.birth);
      const ageDifMs = Date.now() - birthDate.getTime();
      const ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    const onSubmit = async () => {
      Object.keys(errors).forEach((key) => {
        errors[key] = '';
      });

      const isValid = await validateForm();
      if (isValid) {
        const age = checkAge();
        if (age < 18) {
          Swal.fire({
            icon: 'warning',
            title: 'Advertencia',
            text: 'Debes ser mayor de edad para registrarte.',
          });
        } else {
          // Aquí puedes manejar el envío del formulario
          creacionCuenta()
        }
      }
    };

    const creacionCuenta = async () => {
      try{
        const response = await apiFromBackend.post("/api/authenticator/registro/usuario",{
          "Nombre": form.nombre,
          "Apellido": form.apellido,
          "Correo": form.mail,
          "Contrasena": form.password,
          "Fecha_Nacimiento": form.birth,
          "Url_Foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQexVB_aN7tja7JIxbHVyXdDNmrTLvV0mgvgQ&s"
        })
        console.log(response)
        if(response.data.status===201){
          console.log("object");
          Swal.fire({
            icon: 'success',
            title: 'Cuenta creada',
            text: 'Se ha creado su cuenta correctamente.',
          });
          router.push({name:"landing"})
          
        }
      }
      catch(response){

      }
    };

    const toggleShowPassword = () => {
      showPassword.value = !showPassword.value;
    };

    return {
      form,
      errors,
      showPassword,
      passwordValidations,
      onSubmit,
      toggleShowPassword,
    };
  },
});
</script>

<style scoped>
/* Aquí puedes agregar estilos adicionales si es necesario */
</style>
