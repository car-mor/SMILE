import { connectionMySQL } from '../../helpers/connectionMySQL.js'

export class ActividadRecreativaModel {
  static async obtenerTodasLasActividadesRecreativas () {
    const [actividadesRecreativas] = await connectionMySQL.query('select * from actividadRecreativa')

    return actividadesRecreativas
  }

  static async obtenerActividadRecreativaPorId (idActividadRecreativa) {
    const [actividadRecreativa] = await connectionMySQL.query('select * from actividadRecreativa where id_Actividad_Recreativa = ?;', [idActividadRecreativa])
    if (actividadRecreativa.length === 0) return false

    return actividadRecreativa[0]
  }

  static async crearActividadRecreativa ({ entrada }) {
    const {
      Titulo,
      url_imagen: urlImagen,
      url_actividad: urlActividad
    } = entrada

    try {
      await connectionMySQL.query('insert into actividadRecreativa (Titulo, url_imagen, url_actividad) values(?, ?, ?);', [Titulo, urlImagen, urlActividad])
      const [actividadRecreativaCreada] = await connectionMySQL.query('select * from actividadRecreativa where Titulo = ?;', [Titulo])
      return actividadRecreativaCreada[0]
    } catch (error) {
      throw new Error(error)
    }
  }

  static async eliminarActividadRecreativaPorId (idActividadRecreativa) {
    const actividadRecreativa = await this.obtenerActividadRecreativaPorId(idActividadRecreativa)
    if (actividadRecreativa === false) return 'No existe una actividad recreativa con ese id'

    try {
      await connectionMySQL.query('delete from actividadRecreativa where id_Actividad_Recreativa = ?;', [idActividadRecreativa])
      return 'Actividad recreativa eliminada'
    } catch (error) {
      throw new Error(error)
    }
  }
}
