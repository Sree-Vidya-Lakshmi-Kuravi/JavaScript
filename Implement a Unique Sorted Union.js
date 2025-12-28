Implement a Unique Sorted Union
--------------------------------
You should have a function named uniteUnique.
The uniteUnique function should accept two or more arrays as arguments.
The function should return a new array that contains unique values from the argument arrays, in the order they are first found in the arguments. For example, an input like [1, 2, 4], [2, 3, 5] would have an output of [1, 2, 4, 3, 5].

function uniteUnique() {
  let result = [];

  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (!result.includes(arguments[i][j])) {
        result.push(arguments[i][j]);
      }
    }
  }

  return result;
}
