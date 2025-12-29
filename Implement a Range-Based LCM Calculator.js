Implement a Range-Based LCM Calculator
---------------------------------------
You should have a smallestCommons function that accepts an array of two numbers as an argument.
The smallestCommons function should return the smallest common multiple that is evenly divisible by both numbers and all sequential numbers in the range between them.
The function should handle input where the two numbers are not in numerical order.


function smallestCommons(arr) {
  // Sort the numbers to handle unordered input
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);

  // Helper function to find GCD (Greatest Common Divisor)
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  // Helper function to find LCM (Least Common Multiple)
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  let multiple = min;

  // Find LCM of all numbers in the range
  for (let i = min + 1; i <= max; i++) {
    multiple = lcm(multiple, i);
  }

  return multiple;
}
