function Roate_arr_by_one(arr){
    temp = arr[0]
    for(let i= 1; i < arr.length; i++){
        arr[i-1] = arr[i]
    }
    arr[arr.length] = temp;
    return arr;
}

arr = [1,2,3,4,5]

console.log(Roate_arr_by_one(arr))