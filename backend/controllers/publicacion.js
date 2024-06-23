export class PublicacionController {
  constructor (Modelos) {
    this.publicacionModel = Modelos.PublicacionModel
  }

  obtenerTodasLasPublicacionesPorUsuario = async (req, res) => {
    const { idUsuario } = req.params

    const publicaciones = await this.publicacionModel.obtenerTodasLasPublicacionesPorUsuario(idUsuario)
    res.json(publicaciones)
  }

  obtenerPublicacionPorId = async (req, res) => {
    const { id } = req.body

    const publicacion = await this.publicacionModel.obtenerPublicacionPorId(id)

    if (publicacion) return res.json(publicacion)

    res.status(404).json({ message: 'publicacion no encontrada' })
  }

  crearPublicacion = async (req, res) => {
    const nuevaPublicacion = await this.publicacionModel.crearPublicacion({ entrada: req.body })

    res.send(nuevaPublicacion)
  }

  eliminarPublicacion = async (req, res) => {
    const { idPublicacion } = req.body

    const mensaje = await this.publicacionModel.eliminarPublicacion(idPublicacion)

    res.send(mensaje)
  }
}
