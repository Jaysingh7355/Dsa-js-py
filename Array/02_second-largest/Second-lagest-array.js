function second_largest(arr) {
  let largest = arr[0];
  let slargest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      slargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > slargest) {
      slargest = arr[i];
    }
  }
  return slargest;
}

arr = [7, 8, 5, 1, 4, 87, 6, 43, 46, 7, 4, 65];

console.log(second_largest(arr));
