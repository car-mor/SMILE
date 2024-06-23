import { Router } from 'express'
import { PodcastController } from '../controllers/podcast.js'

export const PodcastRouter = (Modelos) => {
  const PodcastRouter = Router()
  const podcastController = new PodcastController(Modelos)

  PodcastRouter.get('/', podcastController.obtenerTodosLosPodcast)
  PodcastRouter.get('/:id', podcastController.obtenerPodscastPorId)
  PodcastRouter.get('medio/:url', podcastController.obtenerPodcasPorURL)
  PodcastRouter.post('/crearPodcast', podcastController.crearPodcast)
  PodcastRouter.post('/eliminarPodcast', podcastController.eliminarPodcast)

  return PodcastRouter
}
