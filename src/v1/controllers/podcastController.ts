import { Request, Response } from "express"

export class PodcastController {
	
	getAllPodcasts(req: Request, res: Response) {
		res.send("get all podcasts")
	}

	getOnePodcast(req: Request, res: Response) {
		res.send("get one podcast")
	}

}
