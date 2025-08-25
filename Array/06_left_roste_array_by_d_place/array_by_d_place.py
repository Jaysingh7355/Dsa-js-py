def roatae_array(arr ,d):
    n = len(arr)
    d = d%n
    temp = [0]*d
    for i in range(0,d):
        temp[i] = arr[i]
    for i in range(d,n):
        arr[i-d] = arr[i]
    for  i in range( n-d , n):
        arr[i] = temp[i-(n-d)]
    

arr = [1,2,3,4,5,6,7]

print(roatae_array(arr,3))



