import { Router } from 'express'
import { EspecialistaController } from '../controllers/especialista.js'

export const EspecialistaRouter = (Modelos) => {
  const EspecialistaRouter = Router()
  const especialistaController = new EspecialistaController(Modelos)

  EspecialistaRouter.get('/', especialistaController.obtenerTodosLosEspecialistas)
  EspecialistaRouter.get('/:id', especialistaController.obtenerEspecialistaPorId)
  EspecialistaRouter.get('/titulo/:titulo', especialistaController.obtenerEspecialistaPorTitulo)
  EspecialistaRouter.get('/modalidad/:modalidad', especialistaController.obtenerEspecialistaPorModalidad)
  EspecialistaRouter.post('/crearEspecialista', especialistaController.crearEspecialista)
  EspecialistaRouter.post('/eliminarEspecialista', especialistaController.eliminarEspecialistaPorId)

  return EspecialistaRouter
}
