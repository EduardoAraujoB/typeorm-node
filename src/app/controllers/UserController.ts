import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import * as Yup from 'yup';

import { User } from '../entities/user.entity';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const userRepository = getManager().getRepository(User);
    const users = await userRepository.find();
    return res.json(users);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Schema is not valid' });
    }

    const userRepository = getManager().getRepository(User);

    const checkUserExists = await userRepository.findOne({
      where: { email: req.body.email },
    });

    if (checkUserExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const newUser = userRepository.create(req.body);
    const createdUser = await userRepository.save(newUser);
    return res.json(createdUser);
  }
}

export default new UserController();
