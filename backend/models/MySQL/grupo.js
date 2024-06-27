import { connectionMySQL } from '../../helpers/connectionMySQL.js'

export class GrupoModel {
  static async obtenerTodosLosGrupos () {
    const [grupos] = await connectionMySQL.query('select * from grupo')

    return grupos
  }

  static async obtenerGrupoPorId (idGrupo) {
    const [grupo] = await connectionMySQL.query('select * from grupo where id_Grupo = ?;', [idGrupo])
    if (grupo.length === 0) return false
console.log("object");
    return grupo[0]
  }

  static async obtenerGrupoPorNombre (nombre) {
    const [grupo] = await connectionMySQL.query('select * from grupo where Nombre = ?;', [nombre])
    if (grupo.length === 0) return false

    return grupo[0]
  }

  static async crearGrupo ({ entrada }) {
    const {
      Nombre,
      Descripcion,
      Cantidad_Miembros: cantidadMiembros,
      Url_foto: urlFoto
    } = entrada

    const existeGrupo = await this.obtenerGrupoPorId(Nombre)

    if (existeGrupo !== false) return 'Ya existe un grupo con ese nombre'

    try {
      await connectionMySQL.query('insert into grupo (Nombre, Descripcion, Cantidad_Miembros, Url_foto) values(?, ?, ?, ?);', [Nombre, Descripcion, cantidadMiembros, urlFoto])
      const [grupoCreado] = await connectionMySQL.query('select * from grupo where Nombre = ?;', [Nombre])
      return grupoCreado[0]
    } catch (error) {
      throw new Error(error)
    }
  }
}
