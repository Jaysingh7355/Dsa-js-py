function leanerSearch(arr, nums){
    for(let i = 0 ; i < arr.length; i++ ){
        if(arr[i] === nums){
            return i;
        }
    }
    return -1;
}

arr = [6,7,8,4,1]

console.log(leanerSearch(arr), 6)