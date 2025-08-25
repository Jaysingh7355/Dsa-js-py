function moveZroes(arr){
let temp = new Array()
for(let i = 0; i < arr.length; i++){
    if(arr[i] != 0){
        temp.push(arr[i]); 
    }
}
for(let i = 0 ; i < temp.length; i++){
  arr[i] = temp[i];
}
for(i = temp.length; i< arr.length; i++){
    arr[i] = 0;
}
return arr;
}


arr  = [1,0,2,3,2,0,0,4,5,1]

console.log(moveZroes(arr))