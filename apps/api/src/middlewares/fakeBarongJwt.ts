import { RequestCustom } from '@zozitech/shared';
import express from 'express';

export const fakeBarongJwtMiddleware = (
  req: RequestCustom,
  res: express.Response,
  next: express.NextFunction
) => {
  req.session = {
    email: 'lthanhdat10x@gmail.com',
    uid: 'ID92ECEA0C76',
    role: 'member',
    level: 1,
    otp: true,
    state: 'active',
    referral_uid: null,
    csrf_token: 'c53e838c0930a8aa3a2a',
    data: '{"language":"en"}',
    created_at: '2021-06-03T09:13:13Z',
    updated_at: '2021-06-03T09:14:56Z',
    labels: [
      {
        key: 'email',
        value: 'verified',
        scope: 'private',
        created_at: '2021-06-03T09:13:33Z',
        updated_at: '2021-06-03T09:13:33Z',
      },
      {
        key: 'otp',
        value: 'enabled',
        scope: 'private',
        created_at: '2021-06-03T09:14:56Z',
        updated_at: '2021-06-03T09:14:56Z',
      },
    ],
    phones: [],
    profiles: [],
    data_storages: [],
  };
  next();
};
