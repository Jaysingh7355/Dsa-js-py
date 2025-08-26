def leanear_serach(arr ,nums):
    for i in range(len(arr)):
        if(arr[i] == nums):
            return i
    return -1


arr = [6,7,8,4,1]

print(leanear_serach(arr,5))


