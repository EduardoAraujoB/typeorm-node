import { Request, Response } from 'express';
import { getManager } from 'typeorm';

import { User } from '../entities/user.entity';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const userRepository = getManager().getRepository(User);
    const users = await userRepository.find();
    return res.json(users);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const userRepository = getManager().getRepository(User);
    const newUser = userRepository.create(req.body);
    const createdUser = await userRepository.save(newUser);
    return res.json(createdUser);
  }
}

export default new UserController();
