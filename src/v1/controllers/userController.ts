import { Request, Response } from "express"

export class UserController {
	
	getAllUsers(req: Request, res: Response) {
		res.send("get all users")
	}

	getOneUser(req: Request, res: Response) {
		res.send("get one user")
	}

	createUser(req: Request, res: Response) {
		res.send("create one user")
	}

	patchUser(req: Request, res: Response) {
		res.send("update a user")
	}

	deleteUser(req: Request, res: Response) {
		res.send("delete user")
	}

}