function isPrime(number) {
  // Handle edge cases
  if (number <= 1) return false;
  if (number === 2) return true;

  // Check if number is divisible by any integer from 2 to square root of number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Example usage:
// console.log(isPrime(7)); // true
// console.log(isPrime(12)); // false
// console.log(isPrime(23)); // true
