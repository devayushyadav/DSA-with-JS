const MergeArrayUsingWhile = (arr1, arr2) => {
  const mergedArray = [];
  let d1 = 0;
  let d2 = 0;
  let d3 = 0;

  // Merge while both arrays have elements
  while (d1 < arr1.length && d2 < arr2.length) {
    if (arr1[d1] < arr2[d2]) {
      mergedArray[d3] = arr1[d1];
      d1++;
    } else {
      mergedArray[d3] = arr2[d2];
      d2++;
    }
    d3++;
  }

  // Add remaining items from arr1
  while (d1 < arr1.length) {
    mergedArray[d3] = arr1[d1];
    d1++;
    d3++;
  }

  // Add remaining items from arr2
  while (d2 < arr2.length) {
    mergedArray[d3] = arr2[d2];
    d2++;
    d3++;
  }

  console.log(mergedArray);
};

const MergeArray = (arr1, arr2) => {
  const mergedArray = [];
  for (let i = 0; i < arr1.length; i++) {
    mergedArray[i] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    mergedArray[arr1.length + i] = arr2[i];
  }
  console.log(mergedArray);
};

const MergeArrayUsingInbuiltFunction = (arr1, arr2) => {
  const mergedArray = [...arr1, ...arr2];
  console.log(mergedArray);
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 11, 23];

MergeArrayUsingWhile(arr1, arr2);
MergeArray(arr1, arr2);
MergeArrayUsingInbuiltFunction(arr1, arr2);
