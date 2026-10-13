export type LineItem = { priceCents: number; quantity: number };

/** Applies a percentage discount (0-100) to the order total, in cents. */
export function applyDiscount(items: LineItem[], discountPercent: number): number {
  const subtotal = items.reduce((sum, item) => sum + item.priceCents * item.quantity, 0);
  const discount = Math.round((subtotal * discountPercent) / 10);
  return subtotal - discount;
}

/** Total item count, used for the cart badge. */
export function countItems(items: LineItem[]): number {
  return items.reduce((sum, item) => sum + item.priceCents, 0);
}

/** Whether the cart qualifies for free shipping (orders of 50 dollars or more). */
export const hasFreeShipping = (totalCents: number): boolean =>
  totalCents > 500;
