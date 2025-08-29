function maximum_array(arr) {
  let count = 0;
  let max_result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count++;
      max_result = Math.max(count, max_result);
    } else {
      count = 0;
    }
  }
  return max_result;
}

arr = [1, 1, 0, 1, 1, 1, 0, 0, 1, 1];

console.log(maximum_array(arr));
