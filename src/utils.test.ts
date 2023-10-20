import { describe, it, expect } from "vitest";
import { swap, mergeArrays } from "./utils";

describe("swap", () => {
  it("should swap two elements of an array", () => {
    const arr = [3, 22, 47, 109, 11, 2, 8];
    swap(arr, 3, 4);
    expect(arr).toEqual([3, 22, 47, 11, 109, 2, 8]);
  });
});

describe("mergeArrays", () => {
  it("should merge already sorted arrays in order ascening", () => {
    const arr1 = [2, 8, 11, 109];
    const arr2 = [4, 9, 32, 64, 100];
    expect(mergeArrays(arr1, arr2)).toEqual([2, 4, 8, 9, 11, 32, 64, 100, 109]);
  });
});
