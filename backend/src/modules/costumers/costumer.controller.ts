import { Request, Response, NextFunction } from "express";
import { CostumerService } from "./costumer.service";

export class CostumerController {

  static async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const costumers = await CostumerService.findAll();

      res.json(costumers);
    } catch (error) {
      next(error);
    }
  }


  static async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const costumerId = Number(req.params.id);

      const costumer = await CostumerService.findById(costumerId);

      if (!costumer) {
        res.status(404).json({
          message: "costumer not found",
        });

        return;
      }

      res.json(costumer);

    } catch (error) {
      next(error);
    }
  }


  static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const {name, email} = req.body;

      if (!name) {
        res.status(400).json({
          message: "name is a required field",
        });

        return;
      }

      const costumer = await CostumerService.create({
        name, 
        email, 
      });

      res.status(201).json(costumer);

    } catch (error) {
      next(error);
    }
  }


  static async update(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const costumerId = Number(req.params.id);

      const costumer = await CostumerService.findById(costumerId);

      if (!costumer) {
        res.status(404).json({
          message: "costumer not found",
        });

        return;
      }

      const updatedCostumer = await CostumerService.update(
        costumer,
        req.body
      );

      res.json(updatedCostumer);

    } catch (error) {
      next(error);
    }
  }


  static async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const costumerId = Number(req.params.id);

      const costumer = await CostumerService.findById(costumerId);

      if (!costumer) {
        res.status(404).json({
          message: "costumer not found",
        });

        return;
      }

      await CostumerService.delete(costumer);

      res.status(204).send();

    } catch (error) {
      next(error);
    }
  }
}