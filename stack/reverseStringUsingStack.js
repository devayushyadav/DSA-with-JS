let initialArray = [];
let currentSize = initialArray.length;
const sampleString = "Hello, World!";
let reversedString = "";

const push = (value) => {
  initialArray[currentSize] = value;
  currentSize++;
};

const pop = () => {
  const lastElement = initialArray[currentSize - 1];
  initialArray.length = currentSize - 1;
  currentSize--;
  return lastElement;
};

const arrayOfString = sampleString.split("");

for (let i = 0; i < arrayOfString.length; i++) {
  push(arrayOfString[i]);
}

for (let i = 0; i < arrayOfString.length; i++) {
  reversedString += pop();
}

console.log(initialArray);
console.log(reversedString);
