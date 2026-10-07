import { Request, Response, NextFunction } from "express";
import { OrderItemService } from "./order-item.service";


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

static async getByEagerlyById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = Number(req.params.id);

      const orderItem = await OrderItemService.findByEagerlyById(id);

      if (!orderItem) {
        res.status(404).json({
          message: "ORDER ITEM NOT FOUND",
        });

        return;
      }

      res.json(orderItem);
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
      const { orderId, bicycleId, quantity, unitPrice } = req.body;

      if (!orderId || !bicycleId || !quantity || !unitPrice) {
        res.status(400).json({
          message: "All fields are required: orderId, bicycleId, quantity, unitPrice",
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