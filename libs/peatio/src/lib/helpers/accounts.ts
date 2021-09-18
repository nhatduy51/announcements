import { peatioModel } from '@zozitech/sequelize';

export const generatePeatioAccount = async (
  member_id: number,
  currency_id: string
) => {
  return await peatioModel.accounts.create({
    member_id: member_id,
    currency_id: currency_id,
    balance: 0,
    locked: 0,
    created_at: new Date(),
    updated_at: new Date(),
  });
};

export const getBalance = async (
  member_id: number,
  currency_id: string
): Promise<number | undefined> => {
  const { balance } = (await peatioModel.accounts.findOne({
    where: { member_id: member_id, currency_id: currency_id },
    attributes: ['member_id', 'currency_id', 'balance'],
  })) || { balance: undefined };
  return balance;
};
