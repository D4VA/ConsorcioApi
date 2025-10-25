import { Router } from 'express';
import { handleCreateOrder, handleGetOrders, getOrderById } from '../modules/controllers/orderController';

const router = Router();

router.post('/', handleCreateOrder);
router.get('/', handleGetOrders);
router.get('/:id', getOrderById)

export default router;