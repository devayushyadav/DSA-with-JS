const traverseArray = (inputArray, inputIndex) => {
  for (let i = 0; i < inputArray.length; i++) {
    console.log(inputArray[i]);
  }

  inputArray.forEach((element) => {
    console.log(element);
  });

  if (inputIndex >= inputArray.length) {
    console.log("Index out of bound");
    return;
  }

  console.log(inputArray[inputIndex]);
};

const arr = [2, 6, 5, 2, 7, 9, 43, 53, 2];
traverseArray(arr, 8);

// IIFE (Immediately Invoked Function Expression)
((inputArray, inputIndex) => {
  for (let i = 0; i < inputArray.length; i++) {
    console.log(inputArray[i]);
  }

  inputArray.forEach((element) => {
    console.log(element);
  });

  if (inputIndex >= inputArray.length) {
    console.log("Index out of bound");
    return;
  }

  console.log(inputArray[inputIndex]);
})(arr, 8);
