import { BicycleDetail } from "../bicycles-details/bicycle-detail.model";
import { Brand } from "../brands/brand.model";
import { Bicycle } from "./bicycle.model";

export class BicycleService {

  static async findAll() {
    return Bicycle.findAll({
      order: [["id", "ASC"]],
    });
  }


  static async findById(id: number) {
    return Bicycle.findByPk(id);
  }

  static async findByEagerlyById(id: number) {
    return Bicycle.findByPk(id, {
      include: [
        { model: Brand,
          as: 'brand'
         },
         {model: BicycleDetail,
          as: 'details'
         }
        ]
    });
  }

  static async create(data: {
    brandId: number;
    model: string;
    description?: string | null;
    price: number;
    stock: number;
  }) {
    return Bicycle.create(data);
  }


  static async update(
    bicycle: Bicycle,
    data: {
      brand?: string;
      model?: string;
      description?: string | null;
      price?: number;
      stock?: number;
    }
  ) {
    return bicycle.update(data);
  }


  static async delete(bicycle: Bicycle) {
    await bicycle.destroy();
  }
}