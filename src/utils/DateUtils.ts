import { POST_ORDER_TYPE } from "../config/constants";

/**
 * Returns a new Date object representing the previous day of the given date.
 *
 * @param date - The original date. Can be a Date object or a value accepted by the Date constructor.
 * @returns A new Date object set to one day before the provided date.
 */
export function previousDay(date: Date | string): Date {
  const copy = new Date(date);
  copy.setDate(copy.getDate() - 1);
  return copy;
}

/**
 * Generates parameters for fetching posts based on the specified order and post date.
 *
 * @param order - The order type as a string (e.g., 'asc', 'desc').
 * @param postDate - The date string representing the reference post date.
 * @returns An object containing:
 *   - orderType: The resolved order type value from POST_ORDER_TYPE.
 *   - selectedDate: The Date object created from the provided postDate.
 *   - yesterday: The Date object representing the day before selectedDate.
 */
export function getPostsParams(order: string, postDate: string) {
  const orderType = POST_ORDER_TYPE[order.toUpperCase()].value;
  const selectedDate = new Date(postDate);
  const yesterday = previousDay(selectedDate);

  return {
    orderType,
    selectedDate,
    yesterday,
  };
}
