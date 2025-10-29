import { Request, Response } from "express";
import { createOrder } from "../services/createrOrder.js";
import { getOrders } from "../services/getOrder.js";
import { prisma } from "../../config/db.js";

export const handleCreateOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    if (!data.customerName || !data.customerEmail || !data.items?.length) {
      return res
        .status(400)
        .json({ message: "Invalid order data or incompleted data" });
    }

    const order = await createOrder(data);

    return res.status(201).json({
      totalBeforeDiscount: order.totalBeforeDiscount,
      totalDiscount: order.totalDiscount,
      totalAfterDiscount: order.totalAfterDiscount,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const handleGetOrders = async (req: Request, res: Response) => {
  try {
    const orders = await getOrders();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const order = await prisma.order.findUnique({
      where: { id: Number(id) },
      include: { items: true, coupon: true },
    });

    if (!order)
      return res.status(404).json({ message: "Pedido no encontrado" });

    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
