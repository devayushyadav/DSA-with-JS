const basicRecusion = (value) => {
  if (value < 10) {
    console.log(value);
    // Recursive call to the function with incremented value
    basicRecusion(value + 1);
  }
};

basicRecusion(0);

// Recusrsion using factorial example
const factorial = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(5));

// Here’s how factorial(5) runs, frame by frame:

// Call factorial(5)
// Not base case ⇒ returns 5 * factorial(4)

// Call factorial(4)
// Not base case ⇒ returns 4 * factorial(3)

// Call factorial(3)
// Not base case ⇒ returns 3 * factorial(2)

// Call factorial(2)
// Not base case ⇒ returns 2 * factorial(1)

// Call factorial(1)
// Base case ⇒ returns 1
