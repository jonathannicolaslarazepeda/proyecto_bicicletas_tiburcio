import { Request, Response, NextFunction } from "express";
import { OrderItemService } from "./order-item.service";
import { OrderItem } from "./order-item.model";

export class OrderItemController {

  static async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const orderItems = await OrderItemService.findAll();

      res.json(orderItems);
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
      const orderItemId = Number(req.params.id);

      const orderItem = await OrderItemService.findById(orderItemId);

      if (!orderItem) {
        res.status(404).json({
          message: "order item not found",
        });

        return;
      }

      res.json(orderItem );

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
      const { customerId, orderDate, status } = req.body;

      if (!customerId) {
        res.status(400).json({
          message: "customerId is a required field",
        });

        return;
      }

      const order = await OrderItemService.create({
        orderId: req.body.orderId,
        bicycleId: req.body.bicycleId,
        quantity: req.body.quantity,
        unitPrice: req.body.unitPrice,
      });

      res.status(201).json(order);

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
      const orderItemId = Number(req.params.id);

      const order = await OrderItemService.findById(orderItemId);

      if (!order) {
        res.status(404).json({
          message: "order not found",
        });

        return;
      }

      const updatedOrder = await OrderItemService.update(
        order,
        req.body
      );

      res.json(updatedOrder);

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
      const orderId = Number(req.params.id);

      const order = await OrderItemService.findById(orderId);

      if (!order) {
        res.status(404).json({
          message: "order not found",
        });

        return;
      }

      await OrderItemService.delete(order);

      res.status(204).send();

    } catch (error) {
      next(error);
    }
  }
}