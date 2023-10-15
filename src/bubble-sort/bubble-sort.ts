import { swap } from "../utils";

/**
 * Bubble sort algorithm.
 *
 * O(n^2) or O(n) best case scenario, for nearly sorted arrays.
 */
export default function bubbleSort (arr: number[]): number[] {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
};
