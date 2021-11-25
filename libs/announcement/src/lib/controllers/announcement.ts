import { announcementModel } from '../../../../sequelize/src/connect/models/announcement_production';

import { RequestCustom } from '@zozitech/shared';
import { Response } from 'express';
import { get } from 'lodash';
import { where } from 'sequelize/types';

class announcementController {
  async fetchAnnouncementList(req: RequestCustom, res: Response) {
    try {
      const announcementList = await announcementModel.articles.findAll({
        order: [['priority', 'DESC']],
      });

      return res.status(200).json({
        msg: 'Fetch announcement list successfully',
        announcement_list: announcementList,
      });
    } catch (error) {
      const status = get(error, 'status', 500);
      return res.status(status).send({
        error: error.message,
      });
    }
  }

  async handelAnnouncement(req: RequestCustom, res: Response) {
    try {
      const {
        headline,
        description,
        state,
        body,
        priority,
        photo_url,
        tags,
        name,
        updated_at,
      } = req.body;

      if (!(headline && state && body && priority && name)) {
        throw new Error('attributes of request is unsatisfactory');
      } else {
        await announcementModel.articles.create({
          headline: headline,
          description: description,
          state: state,
          body: body,
          priority: priority,
          photo_url: photo_url,
          tags: tags,
          created_at: new Date(),
          updated_at: new Date(),
          published_at: updated_at,
        }),
        await announcementModel.categories.create({ name: name });
      }
      return res.status(200).send({
        msg: 'upload announcement successfully ',
      });
    } catch (error) {
      return res.status(403).send({
        message: error.message,
      });
    }
  }

  async updateAnnouncement(req: RequestCustom, res: Response) {
    try {
      const {
        id,
        headline,
        description,
        state,
        body,
        priority,
        photo_url,
        tags,
        name,
        published_at
      } = req.body;

      await announcementModel.articles.update(
        {
          headline: headline,
          description: description,
          state: state,
          body: body,
          priority: priority,
          photo_url: photo_url,
          tags: tags,
          published_at: published_at,
          updated_at: new Date(),
        },
        {
          where: { id: id },
        }
      );

      await announcementModel.categories.update(
        { name: name },
        { where: { id: id } }
      );
      return res.status(201).json({
        msg: 'Update announcement successfully',
      });
    } catch (error) {
      res.status(401).json({
        msg: 'Update announcement failed',
        error: error.message,
        announcements: [],
      });
    }
  }

  // async deleteAnnouncement(req: RequestCustom, res: Response) {
  //   try {
  //     const {id} = req.params;
  //     await announcementModel.announcement_list.destroy({
  //       where: {id: id}
  //     })
  //     return res.status(200).json({
  //       msg: 'Delete announcement successfully',
  //     });
  //   } catch (error) {
  //     res.status(401).json({
  //       msg: 'Delete announcement failed',
  //       error: error.message,
  //       announcements: []
  //     })
  //   }
  // }
  async getAnnouncementDetail(req: RequestCustom, res: Response) {
    try {
      const { id } = req.params;
      const announcementDetail = await announcementModel.articles.findOne({
        where: { id: id },
      });
      return res.status(201).json({
        msg: 'fetch announcement detail successfully',
        announcement: announcementDetail,
      });
    } catch (error) {
      res.status(401).json({
        msg: 'fetch announcement detail failed',
        error: error.message,
        announcements: [],
      });
    }
  }
}
export default new announcementController();
