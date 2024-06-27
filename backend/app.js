import express, { json } from 'express'
import cors from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cookieParser from 'cookie-parser'
import path from 'path'
import dotenv from 'dotenv'


import { corsMiddleware } from './middlewares/cors.js'
import { UsuarioRouter } from './routes/usuario.js'
import { GrupoRouter } from './routes/grupo.js'
import { MiembroGrupoRouter } from './routes/miembroGrupo.js'
import { PodcastRouter } from './routes/podcast.js'
import { PublicacionRouter } from './routes/publicacion.js'
import { EspecialistaRouter } from './routes/especialista.js'
import { ActividadRecreativaRouter } from './routes/actividadRecreativa.js'
import { MensajesRouter } from './routes/mensajes.js'
import { configureSockets } from './sockets/index.js'
import { AuthenticatorRouter } from './routes/authenticator.js'

dotenv.config()

export const crearApp = (Modelos) => {
  const app = express()
  app.use(json())
  app.use(cors({
    origin: ['http://192.168.1.69:5173' ,'http://127.0.0.1:5173', 'http://localhost:8081'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // Permite el envío de cookies
  }));
  app.use(cookieParser())

  const server = createServer(app)
  const io = new Server(server, {
    cors: {
      origin: "*"
    }
  })

  app.disable('x-powered-by')
  AuthenticatorRouter
  app.use('/api/authenticator', AuthenticatorRouter(Modelos))
  app.use('/api/usuario', UsuarioRouter(Modelos))
  app.use('/api/grupo', GrupoRouter(Modelos))
  app.use('/api/miembroGrupo', MiembroGrupoRouter(Modelos))
  app.use('/api/podcast', PodcastRouter(Modelos))
  app.use('/api/publicacion', PublicacionRouter(Modelos))
  app.use('/api/especialista', EspecialistaRouter(Modelos))
  app.use('/api/actividadRecreativa', ActividadRecreativaRouter(Modelos))
  app.use('/api/mensajes', MensajesRouter(Modelos))

  // Configurar archivos estáticos
  const __dirname = path.resolve()
  app.use(express.static(path.join(__dirname, 'public')))

  // Servir el archivo index.html para cualquier ruta que no coincida con las rutas de la API
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })

  configureSockets(io)

  const PORT = process.env.PORT ?? 1234

  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor escuchando en http://0.0.0.0:${PORT}`);
  });
}






 
