import express from 'express';
const router = express.Router()
import coinController from '../controllers/coinController';


router.post("/buy", coinController.purchaseProduct);
router.get("/", coinController.getAllProducts);

export default router;
