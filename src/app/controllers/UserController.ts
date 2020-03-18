import { Request, Response } from 'express';
import { getManager } from 'typeorm';

import { User } from '../entities/user.entity';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const userRepository = getManager().getRepository(User);
    const users = await userRepository.find();
    return res.json(users);
  }
}

export default new UserController();
