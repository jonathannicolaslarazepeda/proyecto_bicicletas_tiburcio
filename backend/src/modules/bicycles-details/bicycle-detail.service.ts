import { Brand } from "../brands/brand.model";
import { BicycleDetail } from "./bicycle-detail.model";

export class BicycleDetailService {

  static async findAll() {
    return BicycleDetail.findAll({
      order: [["id", "ASC"]],
    });
  }


  static async findById(id: number) {
    return BicycleDetail.findByPk(id);
  }


  static async create(data: {
    bicycleId: number;
    frameMaterial: "Aluminum" | "Carbon" | "Steel" | "Titanium";
    wheelSize: number;
    weight: number;
    suspension?: string | null;
  }) {
    return BicycleDetail.create(data);
  }


  static async update(
    bicycle: BicycleDetail,
    data: {
      frameMaterial?: "Aluminum" | "Carbon" | "Steel" | "Titanium";
      wheelSize?: number;
      weight?: number;
      suspension?: string | null;
    }
  ) {
    return bicycle.update(data);
  }


  static async delete(bicycle: BicycleDetail) {
    await bicycle.destroy();
  }
}