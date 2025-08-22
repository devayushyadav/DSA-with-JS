const headTailRecursion = (value) => {
  // Head recursion: process the value before the recursive call
  console.log(value);
  if (value > 0) {
    headTailRecursion(value - 1);
  }
  // Tail recursion: process the value after the recursive call
  console.log(value);
};

headTailRecursion(5);
