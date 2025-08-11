const deleteElem = (arr, pos) => {
  for (let i = pos; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  console.log(arr);
};

const arr = [2, 6, 5, 2, 7, 9, 43, 53, 2];
deleteElem(arr, 2);

const deleteElemViaInbuiltFunc = (arr, pos) => {
  arr.splice(pos, 1);
  console.log(arr);
};

deleteElemViaInbuiltFunc(arr, 2);
