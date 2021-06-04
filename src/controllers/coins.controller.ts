import { NextFunction, Request, Response } from 'express';
import CoinsService from '../services/coins.service';

class CoinsController {
  public coinService = new CoinsService();

  public getCoins = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // TODO: use res.query.??? to get url query params, ??? is name of the query param
    try {
      // TODO: add service call
      const coinJson = await this.coinService.getCoins(req.query.total as string);
      res.status(200).json(coinJson);
    } catch (error) {
      next(error);
    }
  };
}

export default CoinsController;
