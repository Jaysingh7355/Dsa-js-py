function missingNumber(array) {
  let xor1 = 0,
    xor2 = 0;
  for (let i = 0; i < array.length; i++) {
    xor2 = xor2 ^ array[i];
    xor1 = xor1 ^ (i + 1);
  }
  xor1 = xor1 ^ ( array.length+1);
  return xor1 ^ xor2;
}

arr = [1, 2, 4, 5];

console.log(missingNumber(arr));
