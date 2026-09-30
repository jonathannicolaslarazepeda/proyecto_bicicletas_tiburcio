import { Bicycle } from "../modules/bicycles/bicycle.model";
import { Brand } from "../modules/brands/brand.model";
import { BicycleDetail } from "../modules/bicycles-details/bicycle-detail.model";

export function defineAssociations(){
    Brand.hasMany(Bicycle,{foreignKey: "brandId", as: "bicycles"});
    Bicycle.belongsTo(Brand,{foreignKey: "brandId", as: "brand"});

    Bicycle.hasOne(BicycleDetail,{foreignKey: "bicycleId", as: "details", onDelete: "CASCADE"});
    BicycleDetail.belongsTo(Bicycle,{foreignKey: "bicycleId", as: "bicycle"});
}