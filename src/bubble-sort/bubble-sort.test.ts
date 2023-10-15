import { describe, it, expect } from "vitest";
import bubbleSort, { swap } from "./bubble-sort";

describe("swap", () => {
  it("should swap two elements of an array", () => {
    const arr = [3, 22, 47, 109, 11, 2, 8];
    swap(arr, 3, 4);
    expect(arr).toEqual([3, 22, 47, 11, 109, 2, 8]);
  });
});

describe("Buble Sort", () => {
  it("should sort arrays in numerical order ascending", () => {
    expect(bubbleSort([109, 2, 11, 8])).toEqual([2, 8, 11, 109]);
    expect(bubbleSort([11, 1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6, 11]);
  });
});
