import { Router } from "express";
import bicycleRoutes from "../modules/bicycles/bicycle.routes";
import brandRoutes from "../modules/brands/brand.routes";
import bicycleDetailRoutes from "../modules/bicycles-details/bicycle-detail.routes";
import costumerRoutes from "../modules/costumers/costumer.routes";
import orderRoutes from "../modules/orders/order.routes";

const router = Router();

router.use("/bicycles", bicycleRoutes);
router.use("/brands", brandRoutes);
router.use("/bicycle-details", bicycleDetailRoutes);
router.use("/costumers", costumerRoutes);
router.use("/orders", orderRoutes);
export default router;