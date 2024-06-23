import { Router } from 'express'
import { MiembroGrupoController } from '../controllers/miembroGrupo.js'

export const MiembroGrupoRouter = (Modelos) => {
  const MiembroGrupoRouter = Router()
  const miembroGrupoController = new MiembroGrupoController(Modelos)

  MiembroGrupoRouter.get('/:id', miembroGrupoController.obtenerMiembroGrupoPorId)
  MiembroGrupoRouter.post('/obtenerMiembrosGrupo', miembroGrupoController.obtenerTodosLosMiembrosGrupo)
  MiembroGrupoRouter.post('/crearMiembroGrupo', miembroGrupoController.crearMiembroGrupo)
  MiembroGrupoRouter.post('/obtenerMimebroGrupo', miembroGrupoController.obtenerMiembroGrupoPorIdUsuario)
  MiembroGrupoRouter.post('/eliminarMiembroGrupo', miembroGrupoController.eliminarMiembroGrupo)

  return MiembroGrupoRouter
}
