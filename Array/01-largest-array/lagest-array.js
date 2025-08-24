function largest(arr) {
  largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

arr = [7, 8, 12, 14, 16, 3, 8, 88];

console.log(largest(arr));
