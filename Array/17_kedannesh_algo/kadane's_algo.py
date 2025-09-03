def Kadane(arr):
    max = arr[0]
    curr_max = arr[0]
    for i in range(1, len(arr)):
        curr_max = max(arr[i], curr_max + arr[i])
        if curr_max > max:
            max = curr_max  
    return max

# Example usage:
arr = [-2,1,-3,4,-1,2,1,-5,
         4] 
print(Kadane(arr))  # Output: 6
   



   