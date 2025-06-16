import { describe, it, expect } from "vitest";

import { previousDay, getPostsParams } from "./DateUtils";
import { POST_ORDER_TYPE } from "../config/constants";

describe("DateUtils", () => {
  describe("previousDay", () => {
    it("returns the previous day for a Date object", () => {
      const date = new Date("2024-06-17T12:00:00");
      const prev = previousDay(date);
      expect(prev.getDate()).toBe(16);
      expect(prev.getMonth()).toBe(5); // June is month 5 (0-indexed)
      expect(prev.getFullYear()).toBe(2024);
    });

    it("returns the previous day for a date string", () => {
      const prev = previousDay("2024-06-17T12:00:00");
      expect(prev.getDate()).toBe(16);
      expect(prev.getMonth()).toBe(5);
      expect(prev.getFullYear()).toBe(2024);
    });
  });

  describe("getPostsParams", () => {
    it("returns correct params for 'popular' order", () => {
      const result = getPostsParams("popular", "2024-06-17");
      expect(result.orderType).toBe(POST_ORDER_TYPE.POPULAR.value);
      expect(result.selectedDate).toEqual(new Date("2024-06-17"));
      expect(result.yesterday).toEqual(new Date("2024-06-16"));
    });

    it("returns correct params for 'newest' order", () => {
      const result = getPostsParams("newest", "2024-06-17");
      expect(result.orderType).toBe(POST_ORDER_TYPE.NEWEST.value);
      expect(result.selectedDate).toEqual(new Date("2024-06-17"));
      expect(result.yesterday).toEqual(new Date("2024-06-16"));
    });

    it("is case-insensitive for order", () => {
      const result = getPostsParams("PoPuLaR", "2024-06-17");
      expect(result.orderType).toBe(POST_ORDER_TYPE.POPULAR.value);
    });
  });
});
