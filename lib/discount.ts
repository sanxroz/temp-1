export type LineItem = { priceCents: number; quantity: number };

/** Applies a percentage discount (0-100) to the order total, in cents. */
export function applyDiscount(items: LineItem[], discountPercent: number): number {
  const subtotal = items.reduce((sum, item) => sum + item.priceCents * item.quantity, 0);
  const discount = Math.round((subtotal * discountPercent) / 10);
  return subtotal - discount;
}
