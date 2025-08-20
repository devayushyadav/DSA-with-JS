// Basic example of indirect recursion in JavaScript
// where two functions call each other
const func1 = () => {
  console.log("Function 1 called");
  func2();
};

const func2 = () => {
  console.log("Function 2 called");
  func1();
};

func1();

const buyApple = () => {
  if (money > 0) {
    buyMore();
  } else {
    console.log(
      `No money left to buy apples, total apples bought ${appleCount}`
    );
  }
};

const buyMore = () => {
  money -= 10; // Assume each apple costs 10
  appleCount++;
  buyApple();
};

let appleCount = 0;
let money = 100;
buyApple();
