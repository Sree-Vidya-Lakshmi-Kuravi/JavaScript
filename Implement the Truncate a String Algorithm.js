Implement the Truncate a String Algorithm
-------------------------------------------

You should have a function truncateString that accepts two arguments, the first one a string, the second one a number.
If the length of the string is more than the given number, the string should be truncated to reduce the length so that it is equal the given number, and ... should be appended at the end of the truncated string.
If the length of the string is equal to or lower than the given number, the string should be returned unchanged.

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  else {
    return str;
  }
}
