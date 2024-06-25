const socket = io('http://localhost:1234');

const messagesContainer = document.getElementById('messages');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

socket.emit('joinGroup', 1); // Asume que estamos uniéndonos al grupo con id 1

socket.on('previousMessages', (messages) => {
  messages.forEach(addMessageToDOM);
});

socket.on('message', (message) => {
  addMessageToDOM(message);
});

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = messageInput.value;
  socket.emit('message', { usuarioId: 1, grupoId: 1, mensaje: message }); // Asume que el usuario con id 1 está enviando el mensaje
  messageInput.value = '';
});

function addMessageToDOM(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message.mensaje;
  messagesContainer.appendChild(messageElement);
}
