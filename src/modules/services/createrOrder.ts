import { prisma } from "../../config/db";
import { OrderInput } from "../interfaces/types";

export const createOrder = async (data: OrderInput) => {
  const totalBeforeDiscount = data.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  let totalDiscount = 0;

  if (data.couponCode) {
    const coupon = await prisma.coupon.findUnique({
      where: { code: data.couponCode },
    });

    if (coupon) {
      const DiscountValue = Number(coupon.discount);

      if (coupon.type === "GLOBAL") {
        totalDiscount = (totalBeforeDiscount * DiscountValue) / 100;
      } else if (coupon.type === "PRODUCT") {
        data.items.forEach((item) => {
          const itemDiscount =
            (item.price * item.quantity * DiscountValue) / 100;
          totalDiscount += itemDiscount;
        });
      }
    }
  }

  const totalAfterDiscount = totalBeforeDiscount - totalDiscount;

  const order = await prisma.order.create({
    data: {
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      totalBeforeDiscount,
      totalDiscount,
      totalAfterDiscount,
      items: {
        create: data.items.map((item) => ({
          productId: item.productId,
          productName: item.productName,
          price: item.price,
          quantity: item.quantity,
        })),
      },
      coupon: data.couponCode
        ? { connect: { code: data.couponCode } }
        : undefined,
    },
    include: { items: true, coupon: true },
  });

  return order;
};
