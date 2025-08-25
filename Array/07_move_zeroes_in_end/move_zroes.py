def move_zroes(arr):
    temp = []
    for i in range(0, len(arr)):
        if(arr[i]!= 0):
            temp.append(arr[i])
    for i in range(0, len(temp)):
        arr[i] = temp[i]
    for i in range(len(temp),len(arr)):
        arr[i] = 0
    return arr


arr= [1,0,0,0,0,3,4,0,7,0,3]

print(move_zroes(arr))
            
