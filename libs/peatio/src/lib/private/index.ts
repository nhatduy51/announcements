import * as express from 'express';
import holderController from '../controllers/peatio';
const privateRouter = express.Router();

// privateRouter.get('/get', holderController.getHolderInfo);

export { privateRouter };
