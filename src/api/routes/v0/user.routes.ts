import express from 'express';
import { UserController } from '../../controllers/user.controllers';

const router = express.Router();

router.post("/", UserController.create);
router.get("/", UserController.list)
router.get("/:user_id", UserController.read);
router.put("/:user_id", UserController.update);
router.delete("/:user_id", UserController.remove);

export default router;