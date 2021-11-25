import * as express from 'express';
import announcementController from '../controllers/announcement';

const publicRouter = express.Router();

publicRouter.get('/fetch', announcementController.fetchAnnouncementList);
publicRouter.post('/add', announcementController.handelAnnouncement);
publicRouter.put('/update', announcementController.updateAnnouncement);
// publicRouter.delete('/delete/:id', announcementController.deleteAnnouncement);
publicRouter.get('/detail/:id', announcementController.getAnnouncementDetail);

export { publicRouter };

