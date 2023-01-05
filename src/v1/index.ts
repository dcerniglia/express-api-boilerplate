import express from 'express'; 
import http from 'http';
import mongoose from 'mongoose';

import { config } from './config/config';
import Logger from './library/logger';
import v1UserRouter from './routes/userRoutes'
import v1PodcastRouter from './routes/podcastRoutes'

const app = express();
const PORT = process.env.PORT || 1337;

mongoose.connect(config.mongo.url)
.then(() => {
	Logger.info('database connected')
	startServer();
})
.catch(error => {
	Logger.error(error)
})

// health check
app.get('/api/v1/ping', (req, res, next) => res.status(200).json({ message: 'pong' })); 
app.use('/api/v1/users', v1UserRouter);
app.use('/api/v1/podcasts', v1PodcastRouter);


function startServer() {
	app.listen(PORT, () => {
	Logger.info(`server is listening on port ${PORT}`);
	});
}


