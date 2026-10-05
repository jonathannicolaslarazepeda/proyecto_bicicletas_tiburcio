import { Bicycle } from "../modules/bicycles/bicycle.model";
import { Brand } from "../modules/brands/brand.model";
import { BicycleDetail } from "../modules/bicycles-details/bicycle-detail.model";
import { Costumer } from "../modules/costumers/costumer.model";
import { Order } from "../modules/orders/order.model";

export function defineAssociations(){
    Brand.hasMany(Bicycle,{foreignKey: "brandId", as: "bicycles"});
    Bicycle.belongsTo(Brand,{foreignKey: "brandId", as: "brand"});

    Bicycle.hasOne(BicycleDetail,{foreignKey: "bicycleId", as: "details", onDelete: "CASCADE"});
    BicycleDetail.belongsTo(Bicycle,{foreignKey: "bicycleId", as: "bicycle"});

    Costumer.hasMany(Order,{foreignKey: "customerId", as: "orders"});
    Order.belongsTo(Costumer,{foreignKey: "customerId", as: "customer"});
}