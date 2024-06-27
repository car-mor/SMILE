<template>
  <div class="h-screen w-screen xl:w-3/4 absolute bg-[#FFEEE5] flex flex-col items-center">
    <div class="chat-container">
      <div ref="messagesContainer" class="messages-container">
        <!-- Aquí va el div donde se muestran los mensajes -->
        <div v-for="message in messages" :key="message.id" class="message">
          <strong>{{ message.usuarioId }}:</strong> {{ message.mensaje }}
        </div>
      </div>
      <form id="message-form" @submit.prevent="sendMessage" class="message-form">
        <input
          id="message-input"
          v-model="messageInput"
          type="text"
          placeholder="Escribe un mensaje..."
          autocomplete="off"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { io } from 'socket.io-client';
import { state } from '@/state.js'

const socket = io('http://192.168.1.69:1234');

const messages = ref([]);
const messageInput = ref('');
const messagesContainer = ref(null);

// Unirse al grupo con id 1 al montar el componente
onMounted(() => {
  socket.emit('joinGroup', state.datos.entrarChat);
  
  socket.on('previousMessages', (receivedMessages) => {
    messages.value = receivedMessages;
    scrollToBottom();
  });
  
  socket.on('message', (message) => {
    addMessageToDOM(message);
    scrollToBottom();
  });
});

const sendMessage = () => {
  const message = messageInput.value;
  if (message.trim()) {
    socket.emit('message', { usuarioId: state.datos.id, grupoId: state.datos.entrarChat, mensaje: message });
    messageInput.value = '';
  }
};

const addMessageToDOM = (message) => {
  messages.value.push(message);
};

const scrollToBottom = () => {
  // Hacer scroll hacia abajo al contenedor de mensajes
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

// Vigilar los cambios en messages para hacer scroll automáticamente
watch(messages, () => {
  scrollToBottom();
});

</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  border: 1px solid #b35353;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
  max-height: 400px; /* Altura máxima del contenedor de mensajes */
}

.message {
  padding: 10px;
  border-bottom: 1px solid #be6b6b;
}

.message-form {
  display: flex;
}

.message-form input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.message-form button {
  padding: 10px 20px;
  background-color: #f5a363;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.message-form button:hover {
  background-color: #d06f00;
}
</style>
