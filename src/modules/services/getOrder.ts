import { prisma } from "../../config/db";

export const getOrders = async () => {
  return await prisma.order.findMany({
    include: {
      items: true,
      coupon: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};