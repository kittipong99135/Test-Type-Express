import express from 'express';
import UserRouter from './v0/user.routes';
import LineRouter from './v0/line.routes';


const router = express.Router();

router.use("/user", UserRouter);
router.use("/line", LineRouter);

export default router