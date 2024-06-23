import mysql from 'mysql2/promise'

const DEFAULT_CONFIG = {
  host: 'localhost',
  user: 'root',
  port: 3345,
  password: '123456', // Contraseña de Arcy
  database: 'smile'
}

const connection = process.env.DATABASE_URL ?? DEFAULT_CONFIG

export const connectionMySQL = await mysql.createConnection(connection)
