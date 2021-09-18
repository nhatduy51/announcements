import { setUpSequelize } from './initial';

export const sequelize = setUpSequelize();

(async () => {
  try {
    console.log('Connection has been established successfully. - main mysql');
  } catch (error) {
    console.error('Unable to connect to the database - main mysql:', error);
  }
})();
