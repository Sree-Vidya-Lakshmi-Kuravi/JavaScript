Build a Prime Number Sum Calculator
-----------------------------------
You should have a sumPrimes function that accepts a number as an argument.
The sumPrimes function should return the sum of all prime numbers less than or equal to the provided number.
If the input number is less than 2, the function should return 0.

function sumPrimes(num) {
  if (num < 2) {
    return 0;
  }

  function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  let sum = 0;

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}
