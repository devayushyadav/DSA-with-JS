class Stack {
  initialArray = [];
  currentSize;
  maxSize;
  constructor(size) {
    this.currentSize = this.initialArray.length;
    this.maxSize = size;
  }
  push = (value) => {
    if (this.initialArray.length < this.maxSize) {
      this.initialArray[this.currentSize] = value;
      this.currentSize++;
    } else {
      console.log("Stack Overflow");
    }
  };
  pop = () => {
    if (this.initialArray.length > 0) {
      const poppedValue = this.initialArray[this.currentSize - 1];
      this.initialArray.length = this.currentSize - 1;
      this.currentSize--;
      return poppedValue;
    }
  };
  display = () => {
    console.log(this.initialArray);
  };
}

const stack = new Stack(5);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6); // Stack Overflow
stack.display(); // [1,2,3,4,5]
console.log(stack.pop()); // 5
console.log(stack.pop()); // 4
stack.display(); // [1,2,3]
