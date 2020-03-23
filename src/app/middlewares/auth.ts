import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

interface Req extends Request {
  userId?: string;
}

export default async (
  req: Req,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const parts = authHeader.split(' ');

  if (!(parts.length === 2)) {
    return res.status(401).send({ error: 'Token format error' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: 'Token malformated' });
  }

  try {
    interface DecodedParams {
      id: string;
    }

    const decoded = jwt.verify(token, authConfig.secret) as DecodedParams;

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
