import { Router } from 'express'
import { MensajeController } from '../controllers/mensaje.js'

export const MensajesRouter = (Modelos) => {
  const MensajesRouter = Router()
  const mensajesController = new MensajeController(Modelos)

  MensajesRouter.post('/crearMensaje', mensajesController.createMessage)
  MensajesRouter.get('/:grupoId', mensajesController.getMessages)

  return MensajesRouter
}
