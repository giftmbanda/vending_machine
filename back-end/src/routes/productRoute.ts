import express from 'express';
import coinController from '../controllers/productController';

const router = express.Router()

router.post("/", coinController.purchaseProduct);
router.get("/", coinController.getAllProducts);

export default router;
