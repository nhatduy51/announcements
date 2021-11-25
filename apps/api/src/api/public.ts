import * as announcementRouter from '../../../../libs/announcement/src/index';
import * as express from 'express';

const publicRouter = express.Router();

publicRouter.use('/announcement', announcementRouter.publicRouter);

export default publicRouter;
