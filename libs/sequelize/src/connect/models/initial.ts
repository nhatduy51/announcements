import { mysqlConfig } from '@zozitech/shared';
import { Options, Sequelize } from 'sequelize';

const isDev = process.env.NODE_ENV === 'development';

export const setUpSequelize = (options: Options = {}) => {
  const sequelize = new Sequelize({
    host: mysqlConfig.hostMysql,
    port: +mysqlConfig.portMysql,
    username: mysqlConfig.userMysql,
    password: mysqlConfig.passMysql,
    dialect: 'mysql',
    logging: false,
    ...options,
  });

  return sequelize;
};
