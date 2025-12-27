Build a First Element Finder
--------------------------------

Example:

findElement([1, 3, 5, 8], num => num % 2 === 0) // returns 8
findElement([1, 3, 5], num => num % 2 === 0)    // returns undefined
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named findElement that accepts an array and a function as arguments.
The function should return the first item in the array that passes a truth test. This means that, calling the passed in function func, given an element x, the truth test is passed if func(x) is true.
If no element passes the test, the function should return undefined.

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}
