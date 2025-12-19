Build a Longest Word Finder App
-------------------------------
You should create a function named findLongestWordLength that takes a string as an argument.
The function should return the length of the longest word in the string.

function findLongestWordLength(str) {
  let longest = 0;
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
    }
  }

  return longest;
}
