import barongJwt from 'node-auth-barong';

const BARONG_JWT_PUBLIC_KEY_ENV = process.env.BARONG_JWT_PUBLIC_KEY || 'xxx';
const barongJwtPublicKey = Buffer.from(
  BARONG_JWT_PUBLIC_KEY_ENV.trim(),
  'base64'
).toString('utf-8');

export const barongJwtMiddleware = barongJwt({ barongJwtPublicKey });
