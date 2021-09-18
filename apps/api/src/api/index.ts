import express from 'express';
import privateRouter from './private';
import publicRouter from './public';
import { barongJwtMiddleware, fakeBarongJwtMiddleware } from '../middlewares';

const isDev = process.env.NODE_ENV === 'development';

const router = express.Router();

router.use('/public', publicRouter);

router.use(
  '/private',
  isDev ? fakeBarongJwtMiddleware : barongJwtMiddleware,
  privateRouter
);

export default router;
