Implement the Slice and Splice Algorithm
----------------------------------------
Create a frankenSplice function that accepts two arrays and an index.
Copy each element of the first array into the second array, in order, beginning at the given index, and return the resulting array.
The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, index) {
  let res = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    res.splice(index + i, 0, arr1[i]);
  }

  return res;
}

