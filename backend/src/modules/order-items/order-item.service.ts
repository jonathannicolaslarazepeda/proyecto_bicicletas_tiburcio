import { Bicycle } from "../bicycles/bicycle.model";
import { Order } from "../orders/order.model";
import { OrderItem } from "./order-item.model";

export class OrderItemService {

  static async findAll() {
    return OrderItem.findAll({
      order: [["orderId", "ASC"]],
    });
  }


  static async findById(id: number) {
    return OrderItem.findByPk(id);
  }

static async findByEagerlyById(id: number) {
    return OrderItem.findByPk(id, {
      include: [
        { model: Order,
          as: 'order'
         },
         {model: Bicycle,
          as: 'bicycle'
         }
        ]
    });
  }

  static async create(data: {
    orderId: number;
    bicycleId: number;
    quantity: number;
    unitPrice: number;
  }) {
    return OrderItem.create(data);
  }


  static async update(
    orderItem: OrderItem,
    data: {
      orderId?: number;
      bicycleId?: number;
      quantity?: number;
      unitPrice?: number;
    }
  ) {
    return orderItem.update(data);
  }


  static async delete(orderItem: OrderItem) {
    await orderItem.destroy();
  }
}