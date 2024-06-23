export class GrupoController {
  constructor (Modelos) {
    this.grupoModel = Modelos.GrupoModel
  }

  obtenerTodosLosGrupos = async (req, res) => {
    const grupos = await this.grupoModel.obtenerTodosLosGrupos()
    res.json(grupos)
  }

  obtenerGrupoPorId = async (req, res) => {
    const { id } = req.params

    const grupo = await this.grupoModel.obtenerGrupoPorId(id)

    if (grupo) return res.json(grupo)

    res.status(404).json({ message: 'grupo no encontrado' })
  }

  obtenerGrupoPorNombre = async (req, res) => {
    const { nombre } = req.params

    const grupo = await this.grupoModel.obtenerGrupoPorNombre(nombre)

    if (grupo) return res.json(grupo)

    res.status(404).json({ message: 'grupo no encontrado' })
  }

  crearGrupo = async (req, res) => {
    const nuevoGrupo = await this.grupoModel.crearGrupo({ entrada: req.body })

    res.send(nuevoGrupo)
  }
}
