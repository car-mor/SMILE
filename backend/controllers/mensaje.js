export class MensajeController {
  constructor (Modelos) {
    this.mensajeModel = Modelos.MensajeModel
  }

  createMessage = async (req, res) => {
    const { usuarioId, grupoId, mensaje } = req.body

    const nuevoMensaje = await this.mensajeModel.createMessage(usuarioId, grupoId, mensaje)

    res.send(nuevoMensaje)
  }

  getMessages = async (req, res) => {
    const { grupoId } = req.params

    const mensajes = await this.mensajeModel.getMessages(grupoId)

    res.json(mensajes)
  }
}
