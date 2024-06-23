import bcryptjs from 'bcryptjs'
import { UsuarioModel } from './usuario.js'
import { connectionMySQL } from '../../helpers/connectionMySQL.js'

const usuarioModel = UsuarioModel

export class AuthenticatorModel {
  static async registrarUsuario ({ entrada }) {
    const {
      Nombre, Apellido, Correo, Contrasena, Fecha_Nacimiento: fechaNacimiento, Url_Foto: urlFoto
    } = entrada

    const usuarioTuristaPorCorreo = await usuarioModel.obtenerUsuarioPorCorreo(Correo)

    if (usuarioTuristaPorCorreo !== false) return 'Ya existe un usuario con ese correo'

    const salt = await bcryptjs.genSalt(10)
    const hashContrasena = await bcryptjs.hash(Contrasena, salt)

    const fechaNacimientoConFormato = new Date(fechaNacimiento)

    try {
      await connectionMySQL.query(
          `insert into usuario (Nombre, Apellido, Correo, Contrasena, Fecha_Nacimiento, Url_Foto) 
            values(?, ?, ?, ?, ?, ?);`,
          [Nombre, Apellido, Correo, hashContrasena, fechaNacimientoConFormato, urlFoto]
      )
    } catch (error) {
      throw new Error(error)
      // throw new Error('Error creating usuario_turista');
    }

    const usuarioCreado = await usuarioModel.obtenerUsuarioPorCorreo(Correo)

    return usuarioCreado
  }

  static async login ({ entrada }) {
    const { Correo, Contrasena } = entrada

    const usuario = await usuarioModel.obtenerUsuarioPorCorreo(Correo)

    if (usuario === false) return 'Usuario no encontrado'

    const loginCorrecto = await bcryptjs.compare(Contrasena, usuario.Contrasena)

    if (!loginCorrecto) return 'La contraseña del usuario es incorrecta'

    return usuario
  }
}
