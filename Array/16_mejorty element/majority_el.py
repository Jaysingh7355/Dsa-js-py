from numpy import floor


def majority_element(nums):
    map = {}
    for n in nums:
        if n in map:
            map[n] += 1
        else:
            map[n] = 1
        if map[n] > len(nums) // 2:
            return n
    return -1  
        
class Solution:
    def majorityElement(nums):
        cnt = 0
        ele = 0 

      
        for i in nums:
            if cnt == 0:
                ele = i
                cnt = 1
            elif i == ele:
                cnt += 1
            else:
                cnt -= 1

        
        cnt1 = 0
        for i in nums:
            if i == ele:
                cnt1 += 1

        if cnt1 > floor(len(nums) / 2):
            return ele
        return -1

arr = [2,2,3,3,1,2,2]
print(majority_element(arr))