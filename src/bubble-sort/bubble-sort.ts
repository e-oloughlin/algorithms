/**
 * Accepts an array & two indices, referencing
 * items in the array to be swapped.
 *
 * Mutates the passed array.
 *
 * @param arr An array
 * @param i1 the index of an item in the array
 * @param i2 the index of another item in the array
 */
export const swap = (arr: number[], i1: number, i2: number) => {
  const first = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = first;
};

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
