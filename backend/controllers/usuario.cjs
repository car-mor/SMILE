import UsuarioModel  = require('../models/MySQL/usuario');
export class UsuarioController {
  constructor (Modelos) {
    this.usuarioModel = Modelos.UsuarioModel
  }

  obtenerTodosLosUsuarios = async (req, res) => {
    const usuarios = await this.usuarioModel.obtenerTodosLosUsuarios()
    res.json(usuarios)
  }

  obtenerUsuarioPorCorreo = async (req, res) => {
    const { Correo } = req.params

    const usuario = await this.usuarioModel.obtenerUsuarioPorCorreo(Correo)

    if (usuario) return res.json(usuario)

    res.status(404).json({ message: 'Usuario no encontrado' })
  }

  obtenerUsuarioPorId = async (req, res) => {
    const { id } = req.params

    const usuarioTuristaid = await this.usuarioTuristaModel.obtenerUsuarioTuristaPorId(id)

    if (usuarioTuristaid) return res.json(usuarioTuristaid)

    res.status(404).json({ message: 'Usuario turista no encontrado' })
  }

  cambiarContraseña = async (req, res) => {
    const usuarioEditado = await this.usuarioTuristaModel.cambiarContraseña({ entrada: req.body })

    if (typeof usuarioEditado === 'string') {
      return res.send({ status: 401, error: usuarioEditado })
    }

    res.send({ status: 201, message: `Usuario ${usuarioEditado.Nombre} editado con éxito` })
  }

   actualizarPerfil = async (req, res) => {
    const { nombre, apellido, token } = req.body;
    const usuario = await UsuarioModel.obtenerUsuarioPorToken(token);
  
    if (usuario) {
      await UsuarioModel.actualizarUsuario(usuario.id, { nombre, apellido });
      res.send({ status: 200, message: 'Perfil actualizado con éxito' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  };
  
  const actualizarFotoPerfil = async (req, res) => {
    const { token } = req.body;
    const { foto } = req.files;
    const usuario = await UsuarioModel.obtenerUsuarioPorToken(token);
  
    if (usuario) {
      const filePath = `/path/to/save/${foto.name}`;
      await foto.mv(filePath);
      await UsuarioModel.actualizarUsuario(usuario.id, { url_Foto: filePath });
      res.send({ status: 200, message: 'Foto de perfil actualizada con éxito' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  };
  export {
    actualizarPerfil,
    actualizarFotoPerfil
  };
  
}
