import { describe, it, expect } from "vitest";
import bubbleSort from "./bubble-sort";

describe("Buble Sort", () => {
  it("should sort arrays in numerical order ascending", () => {
    expect(bubbleSort([109, 2, 11, 8])).toEqual([2, 8, 11, 109]);
    expect(bubbleSort([11, 1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6, 11]);
  });
});
