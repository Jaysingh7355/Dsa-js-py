# brute
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
# optimal
def moveZeroes( nums ):
        j=-1
        for i in range(len(nums)):
            if nums[i] == 0:
                j = i
                break
        if j == -1: return 
        for i in range(j+1,len(nums)):
            if nums[i] != 0:
                nums[i], nums[j] = nums[j], nums[i] 
                j+= 1


arr= [1,0,0,0,0,3,4,0,7,0,3]
print(move_zroes(arr))
print(moveZeroes(arr))
            
