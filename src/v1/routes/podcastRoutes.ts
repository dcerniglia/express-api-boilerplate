import Router from 'express';
import { PodcastController } from '../controllers/podcastController';

class PodcastRoutes {
	router = Router();
	// this is why we need IOC and DI
	podcastController = new PodcastController();

	constructor() {
		this.initializeRoutes();
	}
	initializeRoutes() {
		this.router.get('/', this.podcastController.getAllPodcasts);
		this.router.get('/:podcastId', this.podcastController.getOnePodcast);

	}
}

export default new PodcastRoutes().router;