Build a Title Case Converter
-----------------------------
You should have a titleCase function that takes a string as an argument.
The titleCase function should return a string with the first letter of each word capitalized and the rest of the word in lower case.
titleCase("I like to code") should return "I Like To Code".
titleCase("javaScript is fun") should return "Javascript Is Fun".

function titleCase(str) {
  const words = str.toLowerCase().split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  return result.join(" ");
}
