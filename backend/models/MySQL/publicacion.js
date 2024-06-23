import { connectionMySQL } from '../../helpers/connectionMySQL.js'

export class PublicacionModel {
  static async obtenerTodasLasPublicacionesPorUsuario (idUsuario) {
    const [publicaciones] = await connectionMySQL.query('select * from publicacion where id_usuario = ?;', [idUsuario])

    return publicaciones
  }

  static async obtenerPublicacionPorId (idPublicacion) {
    const [publicacion] = await connectionMySQL.query('select * from publicacion where id_publicacion = ?;', [idPublicacion])
    if (publicacion.length === 0) return false

    return publicacion[0]
  }

  static async crearPublicacion ({ entrada }) {
    const {
      id_usuario: idUsuario,
      titulo,
      contenido,
      categoria
    } = entrada

    try {
      await connectionMySQL.query('insert into publicacion (id_usuario, titulo, contenido, categoria) values(?, ?, ?, ?);', [idUsuario, titulo, contenido, categoria])

      const [publicacionCreada] = await connectionMySQL.query('select * from publicacion where id_usuario = ? and titulo = ? and contenido = ?;', [idUsuario, titulo, contenido])
      return publicacionCreada[0]
    } catch (error) {
      throw new Error(error)
    }
  }

  static async eliminarPublicacion (idPublicacion) {
    try {
      const existePublicacion = await this.obtenerPublicacionPorId(idPublicacion)

      if (existePublicacion === false) return 'No existe una publicación con ese id'

      await connectionMySQL.query('delete from publicacion where id_publicacion = ?', [idPublicacion])
    } catch (error) {
      throw new Error(error)
    }

    return 'Publicación eliminada con éxito'
  }
}
