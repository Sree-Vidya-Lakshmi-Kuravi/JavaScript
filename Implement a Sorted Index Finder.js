Implement a Sorted Index Finder
-------------------------------
You should have a getIndexToIns function that takes two arguments: an array and a number.
You should use the sort method to sort the array in ascending order.
Your getIndexToIns function should return the lowest index at which the number should be inserted by using the findIndex method.
Your getIndexToIns function should always return a number.
Hint:
The findIndex method is a built-in array method in JavaScript. It takes a callback function and returns the index of the first element that satisfies the condition. Both findIndex and sort are higher-order functions.

Examples:

getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because 1.5 is greater than 1 (index 0) and less than 2 (index 1).
getIndexToIns([20, 3, 5], 19) should return 2 because after sorting to [3, 5, 20], 19 is less than 20 (index 2) and greater than 5 (index 1).
  
------------------------------------------------------------------------------

function getIndexToIns(arr, num) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Find the lowest index where num should be inserted
  const index = arr.findIndex(value => value >= num);

  // Always return a number
  return index === -1 ? arr.length : index;
}
