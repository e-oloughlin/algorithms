import { mergeArrays } from "../utils";

/**
 * Merge sort algorithm.
 *
 * O(n log n)
 */
export default function mergeSort (array: number[]): number[] {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return mergeArrays(left, right);
};
