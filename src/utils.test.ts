import { describe, it, expect } from "vitest";
import { swap } from "./utils";

describe("swap", () => {
  it("should swap two elements of an array", () => {
    const arr = [3, 22, 47, 109, 11, 2, 8];
    swap(arr, 3, 4);
    expect(arr).toEqual([3, 22, 47, 11, 109, 2, 8]);
  });
});
