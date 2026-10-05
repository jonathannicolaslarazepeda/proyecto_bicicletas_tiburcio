import { Router } from "express";
import { CostumerController } from "./costumer.controller";

const router = Router();

router.get("/", CostumerController.getAll);

router.get("/:id", CostumerController.getById);

router.post("/", CostumerController.create);

router.put("/:id", CostumerController.update);

router.delete("/:id", CostumerController.delete);

export default router;