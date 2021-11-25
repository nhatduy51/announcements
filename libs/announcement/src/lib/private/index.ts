import * as express from 'express';
import holderController from '../controllers/announcement';
const privateRouter = express.Router();

// privateRouter.get('/get', holderController.getHolderInfo);

export { privateRouter };
