def second_largest(arr):
    largest = arr[0]
    slargest = -1
    for i in arr:
        if i > largest:
            slargest = largest
            largest = i
        elif i< largest and i > slargest:
            slargest = i
    return slargest


arr = [12,5,7,8,13,35,4,8,7,54]

print(second_largest(arr))

        