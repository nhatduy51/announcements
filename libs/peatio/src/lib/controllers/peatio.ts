import { peatioModel, walletModel } from '@zozitech/sequelize';
import { RequestCustom } from '@zozitech/shared';
import { Response } from 'express';
import { get } from 'lodash';

class peatioController {
  async getpeatios(req: RequestCustom, res: Response) {
    try {
      const membersCount = await peatioModel.members.count({
        where: {
          state: 'active',
        },
      });
      const marketsCount = await peatioModel.markets.count({
        where: { state: 'enabled' },
      });
      const childCurrencies = await walletModel.child_currencies.findAll({});
      const childs = childCurrencies.map((child) => child.child_id);
      const currencies = await peatioModel.currencies.findAll({
        where: {
          visible: 1,
        },
      });
      const currenciesCount = currencies.filter(
        (currency) => !childs.includes(currency.id)
      ).length;

      return res.status(200).json({
        currencies: currenciesCount,
        markets: marketsCount,
        members: membersCount,
      });
    } catch (error) {
      const status = get(error, 'status', 500);
      return res.status(status).send({
        error: error.message,
      });
    }
  }
}

export default new peatioController();
