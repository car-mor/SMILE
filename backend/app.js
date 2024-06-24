import express, { json } from 'express' // require -> commonJS
import cors from "cors";
import 'dotenv/config'

import { corsMiddleware } from './middlewares/cors.js'
import { soloAdmin, soloPublico } from './middlewares/authorization.js'
import cookieParser from 'cookie-parser'
import { AuthenticatorRouter } from './routes/authenticator.js'
import { UsuarioRouter } from './routes/usuario.js'
import { GrupoRouter } from './routes/grupo.js'
import { MiembroGrupoRouter } from './routes/miembroGrupo.js'
import { PodcastRouter } from './routes/podcast.js'
import { PublicacionRouter } from './routes/publicacion.js'
import { EspecialistaRouter } from './routes/especialista.js'
import { ActividadRecreativaRouter } from './routes/actividadRecreativa.js'

export const crearApp = (Modelos) => {
  const app = express()
  app.use(json())
  app.use(cors({
    origin: ['http://127.0.0.1:5173', 'http://localhost:8081'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // Permite el envío de cookies
  }));
  app.use(cookieParser())

  app.disable('x-powered-by')

  app.use('/api/authenticator', AuthenticatorRouter(Modelos))
  app.use('/api/usuario', UsuarioRouter(Modelos))
  app.use('/api/grupo', GrupoRouter(Modelos))
  app.use('/api/miembroGrupo', MiembroGrupoRouter(Modelos))
  app.use('/api/podcast', PodcastRouter(Modelos))
  app.use('/api/publicacion', PublicacionRouter(Modelos))
  app.use('/api/especialista', EspecialistaRouter(Modelos))
  app.use('/api/actividadRecreativa', ActividadRecreativaRouter(Modelos))

  const PORT = process.env.PORT ?? 5555

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
  })
}
