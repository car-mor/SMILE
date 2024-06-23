import { Router } from 'express'
import { ActividadRecreativaController } from '../controllers/actividadRecreativa.js'

export const ActividadRecreativaRouter = (Modelos) => {
  const ActividadRecreativaRouter = Router()
  const actividadRecreativaController = new ActividadRecreativaController(Modelos)

  ActividadRecreativaRouter.get('/', actividadRecreativaController.obtenerTodasLasActividadesRecreativas)
  ActividadRecreativaRouter.get('/:id', actividadRecreativaController.obtenerActividadRecreativaPorId)
  ActividadRecreativaRouter.post('/crearActividadRecreativa', actividadRecreativaController.crearActividadRecreativa)
  ActividadRecreativaRouter.post('/eliminarActividadRecreativa', actividadRecreativaController.eliminarActividadRecreativaPorId)

  return ActividadRecreativaRouter
}
