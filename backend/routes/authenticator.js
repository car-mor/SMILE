import { Router } from 'express'
import { AuthenticatorController } from '../controllers/authenticator.js'

export const AuthenticatorRouter = (Modelos) => {
  const AuthenticatorRouter = Router()
  const authenticatorController = new AuthenticatorController(Modelos)

  AuthenticatorRouter.post('/login', authenticatorController.login)
  AuthenticatorRouter.post('/registro/usuario', authenticatorController.registrarUsuario)
  AuthenticatorRouter.post('/usuarioLogueado', authenticatorController.obtenerUsuarioLogueado)

  return AuthenticatorRouter
}
