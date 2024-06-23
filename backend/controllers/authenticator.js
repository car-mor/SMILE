import dotenv from 'dotenv'
import { validarUsuario } from '../schema/usuarioTurista.js'
import { enviarEmailRecuperarContrasena } from '../services/mail.service.js'
import { generarTokenParaCorreo } from '../helpers/token.js'
import jsonwebtoken from 'jsonwebtoken'

dotenv.config()

export class AuthenticatorController {
  constructor (Modelos) {
    this.usuarioModel = Modelos.UsuarioModel
    this.authenticatorModel = Modelos.AuthenticatorModel
  }

  registrarUsuario = async (req, res) => {
    const resultado = validarUsuario(req.body)

    if (!resultado.success) {
      return res.status(400).json({ error: JSON.parse(resultado.error.message) })
    }

    const nuevoUsuario = await this.authenticatorModel.registrarUsuario({ entrada: resultado.data })

    if (typeof nuevoUsuario === 'string') {
      return res.send({ status: 401, message: nuevoUsuario })
    }

    res.send({ status: 201, message: `Usuario ${nuevoUsuario.Nombre} agregado` })
  }

  login = async (req, res) => {
    const usuarioLogueado = await this.authenticatorModel.login({ entrada: req.body })

    if (typeof usuarioLogueado === 'string') {
      return res.send({ status: 401, error: usuarioLogueado })
    }

    if (usuarioLogueado === false) return res.send({ status: 401, message: 'Usuario Incorrecto', redirect: '/' })

    const token = generarTokenParaCorreo(usuarioLogueado.Correo)

    const cookieOption = {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
      path: '/'
    }

    res.cookie('jwt', token, cookieOption)
    res.send({ status: 201, message: `Usuario ${usuarioLogueado.Nombre} logueado` })
  }


  obtenerUsuarioLogueado = async (req, res) => {
    const { token } = req.body

    const decodificada = jsonwebtoken.verify(token, process.env.JWT_SECRET)

    const usuarioARevisar = await this.usuarioModel.obtenerUsuarioTuristaPorCorreo(decodificada.Correo)

    if (usuarioARevisar.length === 0) return false

    res.json(usuarioARevisar)
  }
}
