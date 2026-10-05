import { Order } from "./order.model";

export class OrderService {

  static async findAll() {
    return Order.findAll({
      order: [["customerId", "ASC"]],
    });
  }


  static async findById(id: number) {
    return Order.findByPk(id);
  }


  static async create(data: {
    customerId: string;
    orderDate?: Date;
    status?: "pending" | "paid" | "shipped" | "cancelled";
  }) {
    return Order.create(data);
  }


  static async update(
    order: Order,
    data: {
      customerId?: string;
      orderDate?: Date;
      status?: "pending" | "paid" | "shipped" | "cancelled";
    }
  ) {
    return order.update(data);
  }


  static async delete(order: Order) {
    await order.destroy();
  }
}