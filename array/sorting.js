// Insertion Sort
const sortArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // Compare current element arr[i] with all previous elements
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        // Swap arr[i] backwards into its correct place
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
    }
    console.log(arr);
  }
  console.log(arr);
};

const array = [5, 3, 8, 1, 2];
sortArray(array);

// Bubble Sort
const sortArraySecondMethod = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // Go only up to arr.length - 1 - i because last i elements are already sorted
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap neighbors if they are out of order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log(`After pass ${i + 1}:`, arr);
  }
  console.log("Final sorted array:", arr);
};

sortArraySecondMethod(array);

// Naive Bubble (1 loop)
const sortUsingSingleArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let x = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = x;
      i = -1;
    }
  }
  console.log(arr);
};

sortUsingSingleArray(array);
