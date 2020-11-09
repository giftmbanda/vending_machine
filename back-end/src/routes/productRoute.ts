import express from 'express';
const router = express.Router()
import coinController from '../controllers/coinController';


router.get("/:id", coinController.purchaseProduct);
router.get("/", coinController.getAllProducts);

export default router;
