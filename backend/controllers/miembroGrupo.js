export class MiembroGrupoController {
  constructor (Modelos) {
    this.miembroGrupoModel = Modelos.MiembroGrupoModel
  }

  obtenerTodosLosMiembrosGrupo = async (req, res) => {
    const miembrosGrupo = await this.miembroGrupoModel.obtenerTodosLosMiembrosGrupo(req.body.idGrupo)
    res.json(miembrosGrupo)
  }

  obtenerMiembroGrupoPorId = async (req, res) => {
    const { id } = req.params

    const miembroGrupo = await this.miembroGrupoModel.obtenerMiembroGrupoPorId(id)

    if (miembroGrupo) return res.json(miembroGrupo)

    res.status(404).json({ message: 'Miembro del grupo no encontrado' })
  }

  obtenerMiembroGrupoPorIdUsuario = async (req, res) => {
    const { id_Grupo, id_Usuario } = req.body

    const miembroGrupo = await this.miembroGrupoModel.obtenerMiembroGrupoPorIdUsuario({ entrada: { id_Grupo, id_Usuario } })

    if (miembroGrupo) return res.json(miembroGrupo)

    res.status(404).json({ message: 'Este lugar no está marcado como favorito' })
  }

  crearMiembroGrupo = async (req, res) => {
    const { id_Grupo, id_Usuario } = req.body

    const nuevoMiembroGrupo = await this.miembroGrupoModel.crearMiembroGrupo({ entrada: { id_Grupo, id_Usuario } })
    res.json(nuevoMiembroGrupo)
  }

  eliminarMiembroGrupo = async (req, res) => {
    const { id_Grupo, id_Usuario } = req.body

    const existeMiembroGrupo = await this.miembroGrupoModel.obtenerMiembroGrupoPorIdUsuario({ entrada: { id_Grupo, id_Usuario } })

    if (existeMiembroGrupo) {
      const resultado = await this.miembroGrupoModel.eliminarMiembroGrupo(existeMiembroGrupo.id_Miembro_Grupo)
      return res.json(resultado)
    }

    res.status(404).json({ message: 'Miembro grupo no encontrado' })
  }
}
