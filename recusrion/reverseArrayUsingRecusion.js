const reverseArray = (arr, start, end) => {
  if (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverseArray(arr, start + 1, end - 1);
  }
  return arr;
};
const array = [1, 2, 3, 4, 5];
console.log(reverseArray(array, 0, array.length - 1)); // Output: [5, 4, 3, 2, 1]
