function removing_duplicate(arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] != arr[i]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return i + 1;
}

arr = [1, 1, 2, 2, 2, 3, 3];

let length =  removing_duplicate(arr);

console.log(arr.slice(0,length));