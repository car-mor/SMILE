import { Router } from 'express'
import { GrupoController } from '../controllers/grupo.js'

export const GrupoRouter = (Modelos) => {
  const GrupoRouter = Router()
  const grupoController = new GrupoController(Modelos)

  GrupoRouter.get('/', grupoController.obtenerTodosLosGrupos)
  GrupoRouter.get('/:id', grupoController.obtenerGrupoPorId)
  GrupoRouter.get('/:nombre', grupoController.obtenerGrupoPorNombre)
  GrupoRouter.post('/crearGrupo', grupoController.crearGrupo)

  return GrupoRouter
}
