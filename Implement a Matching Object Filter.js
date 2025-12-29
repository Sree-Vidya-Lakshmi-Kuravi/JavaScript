Implement a Matching Object Filter
----------------------------------
You should have a whatIsInAName function that accepts two arguments, an array of objects and a source object.
The whatIsInAName function should return a new array containing only the objects from the collection that have all the key–value pairs present in the source object.
If no objects match all the key–value pairs from the source, the function should return an empty array. For example:
Example Code
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);


function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter(obj =>
    sourceKeys.every(key =>
      obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );
}
