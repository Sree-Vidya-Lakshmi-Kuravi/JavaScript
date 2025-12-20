Build a Missing Letter Detector
-------------------------------
You should have a function named fearNotLetter.
The fearNotLetter function should accept one argument: a string representing a range of letters in alphabetical order which can have one letter missing.
The function should find the missing letter in the passed letter range and return it.
If all letters are present in the range, the function should return undefined.

function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    const currentChar = str.charCodeAt(i);
    const nextChar = str.charCodeAt(i + 1);

    if (nextChar !== currentChar + 1) {
      return String.fromCharCode(currentChar + 1);
    }
  }

  return undefined;
}
