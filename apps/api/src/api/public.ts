import * as peatioRouter from '@zozitech/peatio';
import * as express from 'express';

const publicRouter = express.Router();

publicRouter.use('/statistic', peatioRouter.publicRouter);

export default publicRouter;
