import mysql from 'mysql2/promise'

const DEFAULT_CONFIG = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'MySQL|Admin|372', // Contraseña de Arcy
  database: 'smile'
}

const connection = process.env.DATABASE_URL ?? DEFAULT_CONFIG

export const connectionMySQL = await mysql.createConnection(connection)
