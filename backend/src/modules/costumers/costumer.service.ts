import { Costumer } from "./costumer.model";

export class CostumerService {

  static async findAll() {
    return Costumer.findAll({
      order: [["id", "ASC"]],
    });
  }


  static async findById(id: number) {
    return Costumer.findByPk(id);
  }


  static async create(data: {
    name: string;
    email: string;
  
  }) {
    return Costumer.create(data);
  }


  static async update(
    costumer: Costumer,
    data: {
      name?: string;
    }
  ) {
    return costumer.update(data);
  }


  static async delete(costumer: Costumer) {
    await costumer.destroy();
  }
}