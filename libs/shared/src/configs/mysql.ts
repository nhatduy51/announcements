export const mysqlConfig = {
  hostMysql: process.env.DATABASE_HOST,
  portMysql: process.env.DATABASE_PORT || 3306,
  userMysql: process.env.DATABASE_USER,
  passMysql: process.env.DATABASE_PASS,
  peatioDbName: 'peatio_production',
  walletDbName: 'wallet_production',
};
