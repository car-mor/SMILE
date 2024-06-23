import { Router } from 'express'
import { UsuarioController } from '../controllers/usuario.js'

export const UsuarioRouter = (Modelos) => {
  const UsuarioRouter = Router()
  const usuarioController = new UsuarioController(Modelos)

  UsuarioRouter.get('/', usuarioController.obtenerTodosLosUsuarios)
  UsuarioRouter.get('/:Correo', usuarioController.obtenerUsuarioPorCorreo)
  UsuarioRouter.get('/identificador/:id', usuarioController.obtenerUsuarioPorId)
  UsuarioRouter.post('/cambiarContrasena', usuarioController.cambiarContraseña)

  return UsuarioRouter
}
