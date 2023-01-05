import Router from 'express';
import { UserController } from '../controllers/userController';

class UserRoutes {
	router = Router();
	// this is why we need IOC and DI
	userController = new UserController();

	constructor() {
		this.initializeRoutes();
	}
	initializeRoutes() {
		this.router.get('/', this.userController.getAllUsers);
		this.router.get('/:userId', this.userController.getOneUser);
		this.router.post('/', this.userController.createUser);
		this.router.patch('/:userId', this.userController.patchUser);
		this.router.delete('/', this.userController.deleteUser);

	}
}

export default new UserRoutes().router;