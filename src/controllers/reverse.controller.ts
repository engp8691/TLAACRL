import { NextFunction, Request, Response } from 'express';
import ReverseService from '../services/reverse.service';

class ReverseController {
  public reverseService = new ReverseService();

  public reverseStuff = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // TODO: use res.query.??? to get url query params, ??? is name of the query param

    try {
      // TODO: add service call
      const result = await this.reverseService.reverse(req.query.input as string);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}

export default ReverseController;
