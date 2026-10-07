import { Router } from "express";
import { OrderItemController } from "./order-item.controller";

const router = Router();

router.get("/", OrderItemController.getAll);

router.get("/:id", OrderItemController.getById);

router.get("/eagerly/:id", OrderItemController.getByEagerlyById);

router.post("/", OrderItemController.create);

router.put("/:id", OrderItemController.update);

router.delete("/:id", OrderItemController.delete);

export default router;