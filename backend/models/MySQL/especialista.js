import { connectionMySQL } from '../../helpers/connectionMySQL.js'

export class EspecialistaModel {
  static async obtenerTodosLosEspecialistas () {
    const [especialistas] = await connectionMySQL.query('select * from especialista')

    return especialistas
  }

  static async obtenerEspecialistaPorId (idEspecialista) {
    const [especialista] = await connectionMySQL.query('select * from especialista where id_Especialista = ?;', [idEspecialista])
    if (especialista.length === 0) return false

    return especialista[0]
  }

  static async obtenerEspecialistaPorTitulo (titulo) {
    const [especialista] = await connectionMySQL.query('select * from especialista where Titulo = ?;', [titulo])
    if (especialista.length === 0) return false

    return especialista[0]
  }

  static async crearEspecialista ({ entrada }) {
    const {
      Nombre,
      Apellido,
      Titulo,
      Numero,
      Correo,
      Modalidad,
      Ubicacion
    } = entrada

    try {
      await connectionMySQL.query('insert into especialista (Nombre, Apellido, Titulo, Numero, Correo, Modalidad, Ubicacion) values(?, ?, ?, ?, ?, ?, ?);', [Nombre, Apellido, Titulo, Numero, Correo, Modalidad, Ubicacion])
      const [especialistaCreado] = await connectionMySQL.query('select * from especialista where Nombre = ?;', [Nombre])
      return especialistaCreado[0]
    } catch (error) {
      throw new Error(error)
    }
  }

  static async eliminarEspecialistaPorId (idEspecialista) {
    const especialista = await this.obtenerEspecialistaPorId(idEspecialista)
    if (especialista === false) return 'No existe un especialista con ese id'

    try {
      await connectionMySQL.query('delete from especialista where id_Especialista = ?;', [idEspecialista])
      return 'Especialista eliminado'
    } catch (error) {
      throw new Error(error)
    }
  }
}
