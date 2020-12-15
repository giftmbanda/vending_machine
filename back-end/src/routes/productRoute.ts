import express from 'express';
const router = express.Router()
import coinController from '../controllers/coinController';


router.post("/", coinController.purchaseProduct);
router.get("/", coinController.getAllProducts);

export default router;
