import { MensajeModel } from '../models/MySQL/mensaje.js'

export const configureSockets = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected', socket.id)

    socket.on('joinGroup', async (grupoId) => {
      try {
        socket.join(grupoId)
        const messages = await MensajeModel.getMessages(grupoId)
        socket.emit('previousMessages', messages)
      } catch (error) {
        console.error('Error fetching messages:', error)
      }
    })

    socket.on('message', async ({ usuarioId, grupoId, mensaje }) => {
      try {
        const result = await MensajeModel.createMessage(usuarioId, grupoId, mensaje)
        const newMessage = {
          id: result.insertId,
          usuario_id: usuarioId,
          grupo_id: grupoId,
          mensaje: mensaje,
          fecha: new Date()
        }
        io.to(grupoId).emit('message', newMessage)
      } catch (error) {
        console.error('Error creating message:', error)
      }
    })

    socket.on('disconnect', () => {
      console.log('Client disconnected', socket.id)
    })
  })
}
