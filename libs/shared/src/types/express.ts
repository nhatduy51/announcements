/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';

interface Label {
  key: string;
  value: string;
  scope: string;
  created_at: string;
  updated_at: string;
}

interface Session {
  email: string;
  uid: string;
  role: string;
  level: number;
  otp: boolean;
  state: string;
  referral_uid?: any;
  csrf_token: string;
  data: string;
  created_at: string;
  updated_at: string;
  labels: Label[];
  phones: any[];
  profiles: any[];
  data_storages: any[];
}

export type RequestCustom = express.Request & { session: Session };
