import { Router } from 'express'
import { PublicacionController } from '../controllers/publicacion.js'

export const PublicacionRouter = (Modelos) => {
  const PublicacionRouter = Router()
  const publicacionController = new PublicacionController(Modelos)

  PublicacionRouter.get('/:idUsuario', publicacionController.obtenerTodasLasPublicacionesPorUsuario)
  PublicacionRouter.post('/consultar', publicacionController.obtenerPublicacionPorId)
  PublicacionRouter.post('/crearPublicacion', publicacionController.crearPublicacion)
  PublicacionRouter.post('/eliminarPublicacion', publicacionController.eliminarPublicacion)

  return PublicacionRouter
}
