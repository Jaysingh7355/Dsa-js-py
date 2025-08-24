def sorted_array(arr):
    for i in range(len(arr)-1):
        if arr[i] > arr[i+1]: 
            return False
    return True

print(sorted_array([1, 2, 3, 4])) 
print(sorted_array([1, 3, 2, 4]))