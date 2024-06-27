import { Router } from 'express'
import { UsuarioController } from '../controllers/usuario.cjs'

export const UsuarioRouter = (Modelos) => {
  const UsuarioRouter = Router()
  const usuarioController = new UsuarioController(Modelos)

  UsuarioRouter.get('/', usuarioController.obtenerTodosLosUsuarios)
  UsuarioRouter.get('/:Correo', usuarioController.obtenerUsuarioPorCorreo)
  UsuarioRouter.get('/identificador/:id', usuarioController.obtenerUsuarioPorId)
  UsuarioRouter.post('/cambiarContrasena', usuarioController.cambiarContraseña)
  UsuarioRouter.post('/actualizarPerfil', usuarioController.actualizarPerfil)
  UsuarioRouter.post('/actualizarFotoPerfil', usuarioController.actualizarFotoPerfil)
  return UsuarioRouter
}
