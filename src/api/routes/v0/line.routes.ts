import express from 'express';
import { LineController } from '../../controllers/line.controller';

const router = express.Router()

router.post("/", LineController.create);
router.get("/", LineController.list)
router.get("/:line_id", LineController.read);
router.put("/:line_id", LineController.update);
router.delete("/:line_id", LineController.remove);

export default router;