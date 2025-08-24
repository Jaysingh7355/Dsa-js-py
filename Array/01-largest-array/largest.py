def largest_in_array(arr):
    largest = arr[0]
    for x in arr:
        if x > largest:
            largest = x
    return largest

arr = [6.12,13,6,7,45,7,9]

print (largest_in_array(arr))

