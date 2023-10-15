import { describe, it, expect } from "vitest";
import selectionSort from "./selection-sort";

describe("Selection Sort", () => {
  it("should sort arrays in numerical order ascending", () => {
    expect(selectionSort([109, 11, 8, 2])).toEqual([2, 8, 11, 109]);
    expect(selectionSort([34, 22, 10, 19, 17])).toEqual([10, 17, 19, 22, 34]);
  });
});
