const insertElem = (arr, elem, pos) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= pos) {
      arr[i + 1] = arr[i];
      if (i == pos) {
        arr[i] = elem;
      }
    }
  }
  console.log(arr);
};

const arr = [2, 6, 5, 2, 7, 9, 43, 53, 2];
insertElem(arr, 8, 2);

const insertElemViaInbuiltFunc = (arr, elem, pos) => {
  arr.splice(pos, 0, elem);
  // splice(startIndex, deleteCount, ...itemsToAdd)
  // startIndex = position to insert at
  // deleteCount = number of elements to remove
  // itemsToAdd = elements to insert
  console.log(arr);
};

insertElemViaInbuiltFunc(arr, 8, 2);
