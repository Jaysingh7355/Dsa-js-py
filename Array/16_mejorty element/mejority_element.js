// Better - solution;
function MajorityElement(nums) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) > nums.length / 2) {
      return num;
    }
  }
  return -1;
}

//optimal solution - Boyer-Moore Voting Algorithm
function MajorityElementOptimal(nums) {
    let count = 0;
    let ele =0;
    for (let num of nums) {
        if(count == 0){
            ele = num;
            count++;
        }
        else if(ele == num){
            count++;
        }
        else{
            count--;
        }
    }
    let count1 = 0;
    for(let num of nums){
        if(num == ele) count1++;
    }
    if(count1 > Math.floor(nums.length/2)) return ele;
    return -1;
}

arr = [2, 3, 3, 2, 3, 4, 3];
console.log(MajorityElement(arr)); // Output: 3
