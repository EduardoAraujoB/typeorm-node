import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json('Hello World'));

export default routes;
