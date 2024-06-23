export class PodcastController {
  constructor (Modelos) {
    this.podcastModel = Modelos.PodcastModel
  }

  obtenerTodosLosPodcast = async (req, res) => {
    const podcast = await this.podcastModel.obtenerTodosLosPodcast()
    res.json(podcast)
  }

  obtenerPodscastPorId = async (req, res) => {
    const { id } = req.params

    const podcast = await this.podcastModel.obtenerPodscastPorId(id)

    if (podcast) return res.json(podcast)

    res.status(404).json({ message: 'podcast no encontrado' })
  }

  obtenerPodcasPorURL = async (req, res) => {
    const { url } = req.params

    const podcast = await this.podcastModel.obtenerPodcasPorURL(url)

    if (podcast) return res.json(podcast)

    res.status(404).json({ message: 'podcast no encontrado' })
  }

  crearPodcast = async (req, res) => {
    const nuevoPodcast = await this.podcastModel.crearPodcast({ entrada: req.body })

    res.send(nuevoPodcast)
  }

  eliminarPodcast = async (req, res) => {
    const { id_Podcast } = req.body

    const mensaje = await this.podcastModel.eliminarPodcast(id_Podcast)

    res.send(mensaje)
  }
}
