import bcryptjs from 'bcryptjs'
import { connectionMySQL } from '../../helpers/connectionMySQL.js'
const jwt = require('jsonwebtoken');

export class UsuarioModel {
  static async obtenerTodosLosUsuarios () {
    const [usuario] = await connectionMySQL.query(
      'select id, Nombre, Apellido, Correo, Contrasena, Fecha_Nacimiento, url_Foto from usuario;'
    )
    return usuario
  }

  static async obtenerUsuarioPorCorreo (Correo) {
    const [usuario] = await connectionMySQL.query(
      'select * from usuario where Correo = ?;', [Correo]
    )

    if (usuario.length === 0) return false
    return usuario[0]
  }

  static async obtenerUsuarioPorId (id) {
    const [usuarioTurista] = await connectionMySQL.query(
      'select * from usuario_turista where id = ?;', [id]
    )

    if (usuarioTurista.length === 0) return false
    return usuarioTurista[0]
  }

  static async cambiarContraseña ({ entrada }) {
    const {
      id_Turista: idTurista, Contrasena
    } = entrada

    const existeUsuario = await this.obtenerUsuarioTuristaPorId(idTurista)

    if (!existeUsuario) return 'El usuario no existe'

    const salt = await bcryptjs.genSalt(10)
    const hashContrasena = await bcryptjs.hash(Contrasena, salt)

    try {
      await connectionMySQL.query(
        'update usuario_turista set contrasena = ? where id = ?', [hashContrasena, idTurista]
      )

      const usuarioEditado = await this.obtenerUsuarioTuristaPorId(idTurista)
      console.log(usuarioEditado)
      return usuarioEditado
    } catch (error) {
      return error
    }
  }

  static async obtenerUsuarioPorToken(token) {
    // Decodificar el token y obtener el usuario asociado
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return this.obtenerUsuarioPorId(decoded.id);
  }

  static async actualizarUsuario(id, datos) {
    const campos = [];
    const valores = [];

    for (const [key, value] of Object.entries(datos)) {
      campos.push(`${key} = ?`);
      valores.push(value);
    }

    const query = `UPDATE usuario SET ${campos.join(', ')} WHERE id = ?`;
    valores.push(id);

    await connectionMySQL.query(query, valores);
  }

  static async obtenerUsuarioPorId(id) {
    const query = 'SELECT * FROM usuario WHERE id = ?';
    const [rows] = await connectionMySQL.query(query, [id]);
    return rows[0];
  }

 
}
module.exports = UsuarioModel
