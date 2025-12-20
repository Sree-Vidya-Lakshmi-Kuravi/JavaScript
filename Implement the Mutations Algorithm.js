Implement the Mutations Algorithm
-----------------------------------
Create a function named mutation that takes an array as its argument.
mutation should return true if the string in the first element of the array contains all of the letters of the string in the second element of the array, and false otherwise. For example:
mutation(["hello", "Hello"]), should return true because all of the letters in the second string are present in the first, ignoring case.
mutation(["hello", "hey"]) should return false because the string hello does not contain a y.
mutation(["Alien", "line"]), should return true because all of the letters in line are present in Alien.

function mutation(arr) {
  let first = arr[0].toLowerCase();
  let sec = arr[1].toLowerCase();
  for(let i = 0; i< sec.length; i++) {
    if (!first.includes(sec[i])) {
      return false;
    }
      
  }
  return true;
}
