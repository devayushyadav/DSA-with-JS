class StringManipulator {
  initialString;
  reversedString = "";
  currentSize;
  initialArray = [];
  arrayOfString = [];

  constructor(initialString) {
    this.initialString = initialString;
    this.currentSize = 0;
  }

  push = (value) => {
    this.initialArray[this.currentSize] = value;
    this.currentSize++;
  };

  pop = () => {
    if (this.currentSize > 0) {
      const lastElement = this.initialArray[this.currentSize - 1];
      this.initialArray.length = this.currentSize - 1;
      this.currentSize--;
      return lastElement;
    } else {
      console.log("Stack Underflow");
      return null;
    }
  };

  reverseStringUsingStack = () => {
    this.reversedString = "";
    this.initialArray = [];
    this.currentSize = 0;

    this.arrayOfString = this.initialString.split("");
    console.log(this.arrayOfString);

    for (let i = 0; i < this.arrayOfString.length; i++) {
      this.push(this.arrayOfString[i]);
    }

    for (let i = 0; i < this.arrayOfString.length; i++) {
      this.reversedString += this.pop();
    }

    return this.reversedString;
  };
}

const stringManipulator = new StringManipulator("Hello, World!");
const reversed = stringManipulator.reverseStringUsingStack();
console.log({ reversed }); // { reversed: '!dlroW ,olleH' }
