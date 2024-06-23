export class ActividadRecreativaController {
  constructor (Modelos) {
    this.actividadRecreativaModel = Modelos.ActividadRecreativaModel
  }

  obtenerTodasLasActividadesRecreativas = async (req, res) => {
    const actividadesRecreativas = await this.actividadRecreativaModel.obtenerTodasLasActividadesRecreativas()
    res.json(actividadesRecreativas)
  }

  obtenerActividadRecreativaPorId = async (req, res) => {
    const { id } = req.params

    const actividadRecreativa = await this.actividadRecreativaModel.obtenerActividadRecreativaPorId(id)

    if (actividadRecreativa) return res.json(actividadRecreativa)

    res.status(404).json({ message: 'actividadRecreativa no encontrado' })
  }

  crearActividadRecreativa = async (req, res) => {
    const nuevaActividadRecreativa = await this.actividadRecreativaModel.crearActividadRecreativa({ entrada: req.body })

    res.send(nuevaActividadRecreativa)
  }

  eliminarActividadRecreativaPorId = async (req, res) => {
    const { id_Actividad_Recreativa } = req.body

    const eliminado = await this.actividadRecreativaModel.eliminarActividadRecreativaPorId(id_Actividad_Recreativa)

    res.send(eliminado)
  }
}
