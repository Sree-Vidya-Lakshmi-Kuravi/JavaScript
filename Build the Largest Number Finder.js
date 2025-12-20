Build the Largest Number Finder
---------------------------------
You should create a function largestOfAll that takes an array of arrays as an argument.
The function should return an array containing the largest number from each sub-array.

function largestOfAll(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i][0];

    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }

    result.push(largest);
  }

  return result;
}
