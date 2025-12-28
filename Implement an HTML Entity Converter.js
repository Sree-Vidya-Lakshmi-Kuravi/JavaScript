Implement an HTML Entity Converter
-----------------------------------
User Stories:

You should have a convertHTML function that accepts a string as an argument.

The convertHTML function should return a new string by converting special characters in the argument string to their corresponding HTML entities.

& should be converted to &amp;.
< should be converted to &lt;.
> should be converted to &gt;.
" should be converted to &quot;.
' should be converted to &apos;.

function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (htmlEntities[str[i]]) {
      result += htmlEntities[str[i]];
    } else {
      result += str[i];
    }
  }

  return result;
}
