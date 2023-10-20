import { describe, it, expect } from "vitest";
import insertionSort from "./insertion-sort";

describe("Selection Sort", () => {
  it("should sort arrays in numerical order ascending", () => {
    expect(insertionSort([109, 11, 8, 2])).toEqual([2, 8, 11, 109]);
    expect(insertionSort([34, 22, 10, 19, 17])).toEqual([10, 17, 19, 22, 34]);
  });
});
