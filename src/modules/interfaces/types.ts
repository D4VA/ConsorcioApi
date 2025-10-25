export interface OrderItemInput {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
}

export interface OrderInput {
  customerName: string;
  customerEmail: string;
  items: OrderItemInput[];
  couponCode?: string;
}

export interface CouponInput {
  id: number;
  code: string;
  type: "GLOBAL" | "PRODUCT"
  discountPercentage: number;
}