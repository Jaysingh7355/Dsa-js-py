
// brute aproch
function leftRotate(arr, d) {
  let n = arr.length;
  d = d % n;
  let temp = new Array(d);
  for (let i = 0; i < d; i++) {
    temp[i] = arr[i];
  }
  for (let i = d; i < n; i++) {
    arr[i - d] = arr[i];
  }
  for (let i = n - d; i < n; i++) {
    arr[i] = temp[i - (n - d)];
  }
  return arr;
}

arr = [1, 2, 3, 4, 5, 6, 7];

console.log(leftRotate(arr, 3));

 
