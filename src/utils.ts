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
