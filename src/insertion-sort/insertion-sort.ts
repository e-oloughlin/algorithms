/**
 * Insertion sort algorithm.
 *
 * O(n^2) worst case
 */
export default function insertionSort (array: number[]): number[] {
  // Loop through whole array
  for (let unsortedIndex = 1; unsortedIndex < array.length; unsortedIndex++) {
    let currentUnsorted = array[unsortedIndex];
    let sortedIndex;

    // Loop through sorted portion of array
    for (sortedIndex = unsortedIndex - 1; sortedIndex >= 0 && array[sortedIndex] > currentUnsorted; sortedIndex--) {
      array[sortedIndex+1] = array[sortedIndex];
    }
    array[sortedIndex+1] = currentUnsorted;
  }

  return array;
};
