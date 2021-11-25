import { mysqlConfig } from '@zozitech/shared';
import { announcementProd } from '../../models';
import { setUpSequelize } from './initial';

export const announcementSequelize = setUpSequelize({
  database: mysqlConfig.announcementDbName,
});

export const announcementModel = announcementProd.initModels(announcementSequelize);

(async () => {
  try {
    await announcementSequelize.authenticate();
    console.log(
      'Connection has been established successfully. - announcement_production'
    );
  } catch (error) {
    console.error(
      'Unable to connect to the database - announcement_production:',
      error
    );
  }
})();
