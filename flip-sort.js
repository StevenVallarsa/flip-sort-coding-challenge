/**
 * @param {number[]} arr
 * @return {number[]}
 */
function flipSort(array) {
  const flipArray = [];

  // Iterate through array from last index to first
  for (let i = array.length - 1; i >= 0; i--) {
    // If largest number is already at its proper index, skip and go to next index without flipping
    if (array[i] === i + 1) {
      continue;
    }

    // Get largest remaining number and its index
    let maxNum = Math.max(...array.slice(0, i));
    let maxIndex = array.indexOf(maxNum);

    // If largest number is at index 0, flip entire array up to
    // already placed numbers at right of array,
    // and include number of elements flipped (k)
    if (maxNum === array[0]) {
      array = [...array.slice(0, i + 1).reverse(), ...array.slice(i + 1)];
      flipArray.push(i + 1);
    } else {
      array = [...array.slice(0, maxIndex + 1).reverse(), ...array.slice(maxIndex + 1)];
      flipArray.push(maxIndex + 1);
      array = [...array.slice(0, i + 1).reverse(), ...array.slice(i + 1)];
      flipArray.push(i + 1);
    }
  }
  return flipArray;
}

// console.log(flipSort([1, 3, 4, 2]));
