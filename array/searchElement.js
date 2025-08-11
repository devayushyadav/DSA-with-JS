const searchElement = (arr, elem) => {
  let found = false;

  for (let i = 0; i < arr.length; i++) {
    // also fixed loop condition
    if (arr[i] === elem) {
      console.log(`Element found at index ${i}`);
      found = true;
      break;
    }
  }

  if (!found) {
    console.log("Element not found");
  }
};

const arr = [2, 6, 5, 2, 7, 9, 43, 53, 2];
searchElement(arr, 53); // Found
searchElement(arr, 100); // Not found

const searchElementViaInbuiltFunc = (arr, elem) => {
  const index = arr.indexOf(elem);
  if (index === -1) {
    console.log("Element not found");
  } else {
    console.log(`Element found at index ${index}`);
  }
};

searchElementViaInbuiltFunc(arr, 53); // Found
searchElementViaInbuiltFunc(arr, 100); // Not found
