import { describe, it, expect } from "vitest";
import mergeSort from "./merge-sort";

describe("Merge Sort", () => {
  it("should sort arrays in numerical order ascending", () => {
    expect(mergeSort([109, 11, 8, 2])).toEqual([2, 8, 11, 109]);
    expect(mergeSort([34, 22, 10, 19, 17])).toEqual([10, 17, 19, 22, 34]);
  });
});
