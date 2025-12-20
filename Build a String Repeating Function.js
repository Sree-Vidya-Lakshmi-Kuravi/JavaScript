Build a String Repeating Function
----------------------------------
You should create a function named repeatStringNumTimes that takes two parameters: a string and a number.
The function should return the string repeated the specified number of times.
If the number is less than or equal to zero, the function should return an empty string.

function repeatStringNumTimes(str, num) {
  if (num <= 0){
    return "";
  }
  
  let res = "";
  for(let i = 0; i< num; i++) {
    res += str;
    
  }
  return res;
}
