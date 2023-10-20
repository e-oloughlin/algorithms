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
 * Accepts two already sorted arrays and returns them
 * merged into one single sorted array.
 */
export const mergeArrays = (arr1: number[], arr2: number[]) => {
  const result: number[] = [];

  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      // @ts-ignore
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};
