
///Part 1: Fizz Buzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
      console.log("Fizz");
  } else if (i % 5 === 0) {
      console.log("Buzz");
  } else {
      console.log(i);
  }
}
///Part 2: Prime Time
function isPrime(num) {
  if (num <= 1) {
      return false;
  }
  if (num <= 3) {
      return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
      return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
          return false;
      }
  }
  return true;
}

// Testing the function with various numbers
console.log(isPrime(2));  // true
console.log(isPrime(3));  // true
console.log(isPrime(4));  // false
console.log(isPrime(5));  // true
console.log(isPrime(16)); // false
console.log(isPrime(17)); // true
