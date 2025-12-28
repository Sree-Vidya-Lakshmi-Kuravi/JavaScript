Implement an Element Skipper
----------------------------
You should have a dropElements function that accepts an array (arr) and a function (func) as arguments.
The dropElements function should iterate through the array and remove elements starting from the first one until func returns true for an element.
The dropElements function should return the remaining elements in the array if the condition is met.
If the condition is never satisfied, it should return an empty array.

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
