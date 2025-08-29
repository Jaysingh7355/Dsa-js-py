function onceOcress_ones(arr) {
  let xorr = 0;
  for (let i = 0; i < arr.length; i++) {
    xorr = xorr ^ arr[i];
  }
  return xorr;
}

arr = [1, 1, 2,2,4, 3, 3, 8, 8];

console.log(onceOcress_ones(arr));
