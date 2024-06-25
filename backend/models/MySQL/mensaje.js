import { connectionMySQL } from '../../helpers/connectionMySQL.js'

export class MensajeModel {
  static async createMessage (usuarioId, grupoId, mensaje) {
    const [result] = await connectionMySQL.query(
      'INSERT INTO mensajes (usuario_id, grupo_id, mensaje, fecha) VALUES (?, ?, ?, NOW())',
      [usuarioId, grupoId, mensaje]
    )
    return result
  }

  static async getMessages (grupoId) {
    const [rows] = await connectionMySQL.query(
      'SELECT * FROM mensajes WHERE grupo_id = ? ORDER BY fecha ASC',
      [grupoId]
    )
    return rows
  }
}
