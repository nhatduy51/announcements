import * as express from 'express';
import peatioController from '../controllers/peatio';

const publicRouter = express.Router();

publicRouter.get('/fetch', peatioController.getpeatios);

export { publicRouter };
