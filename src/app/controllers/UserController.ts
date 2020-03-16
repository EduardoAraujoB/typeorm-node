import { Request, Response } from 'express';
import { getConnection } from 'typeorm';

import { User } from '../entities/user.entity';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await getConnection().manager.find(User);
    return res.json(users);
  }
}

export default new UserController();
