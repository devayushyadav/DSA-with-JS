let stackContainer = [];
let currentSize = stackContainer.length;
const maxSize = 5;

const push = (value) => {
  if (stackContainer.length < maxSize) {
    // stackContainer.push(value)
    stackContainer[currentSize] = value;
    currentSize++;
  } else {
    console.log("Stack Overflow");
  }
};

const pop = () => {
  if (stackContainer.length > 0) {
    // return stackContainer.pop()
    currentSize--;
    const poppedValue = stackContainer[currentSize];
    stackContainer.length = currentSize;
    return poppedValue;
  } else {
    console.log("Stack Underflow");
  }
};

push(1);
push(2);
push(3);
push(4);
push(5);
push(6); // Stack Overflow
console.log(stackContainer); // [1,2,3,4,5]
console.log(pop()); // 5
console.log(pop()); // 4
console.log(stackContainer); // [1,2,3]
console.log(pop()); // 3
console.log(pop()); // 2
console.log(pop()); // 1
console.log(pop()); // Stack Underflow
