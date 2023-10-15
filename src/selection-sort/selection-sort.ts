import { swap } from "../utils";

/**
 * Selection sort algorithm.
 *
 * O(n^2)
 */
export default function selectionSort (array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap(array, i, lowest);
    }
  }

  return array;
};
