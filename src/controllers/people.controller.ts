import { NextFunction, Request, Response } from 'express';
import PeopleService from '../services/people.service';

class PeopleController {
  // TODO: don't forget to adjust people.route.ts
  public peopleService = new PeopleService();
  public prescribeToPeople = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // TODO: use req.body to pull passed into it
    try {
      // TODO: add service call
      const peopleJson = await this.peopleService.prescribe(req.body);
      res.status(200).json(peopleJson);
    } catch (error) {
      next(error);
    }
  };
}

export default PeopleController;
