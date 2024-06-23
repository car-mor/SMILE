import { connectionMySQL } from '../../helpers/connectionMySQL.js'

export class PodcastModel {
  static async obtenerTodosLosPodcast () {
    const [grupos] = await connectionMySQL.query('select * from podcast')

    return grupos
  }

  static async obtenerPodscastPorId (idPodscast) {
    const [podcast] = await connectionMySQL.query('select * from podcast where id_Podcast = ?;', [idPodscast])
    if (podcast.length === 0) return false

    return podcast[0]
  }

  static async obtenerPodcasPorURL (url) {
    const [podcast] = await connectionMySQL.query('select * from podcast where url = ?;', [url])
    if (podcast.length === 0) return false

    return podcast[0]
  }

  static async crearPodcast ({ entrada }) {
    const {
      titulo,
      autor,
      url,
      anio_publicacion: anioPublicacion
    } = entrada

    const existePodcast = await this.obtenerPodcasPorURL(url)

    if (existePodcast !== false) return 'Ya existe un podcast con esa URL'

    try {
      await connectionMySQL.query('insert into podcast (titulo, autor, url, anio_publicacion) values(?, ?, ?, ?);', [titulo, autor, url, anioPublicacion])

      const [podcastCreado] = await connectionMySQL.query('select * from podcast where url = ?;', [url])
      return podcastCreado[0]
    } catch (error) {
      throw new Error(error)
    }
  }

  static async eliminarPodcast (idPodcast) {
    try {
      const existePodcast = await this.obtenerPodscastPorId(idPodcast)

      if (existePodcast === false) return 'No existe un podcast con ese id'

      await connectionMySQL.query('delete from podcast where id_Podcast = ?', [idPodcast])
    } catch (error) {
      throw new Error(error)
    }

    return 'Podcast eliminado con éxito'
  }
}
