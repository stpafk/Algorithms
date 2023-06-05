"Given an integer array nums, find the subarray with the largest sum, and return its sum."

class Solution:
 def maxSubArray(self, nums: List[int]) -> int:
    len_n = len(nums)
    
    if len_n == 1: #end if just 1
        return nums[0]
    
    sums = [] #start array to store values
    sums.append(nums[0]) 
    max_sum = nums[0] #  append the first element of nums, since element 0 will always just be itself.
    
    for i in range(1, len_n): #iterate from 1 to the length of nums, and within this for-loop append the max of the previous sum plus nums[i] and just nums[i].
        sums.append(max(sums[i — 1] + nums[i], nums[i])) 
        max_sum = max(max_sum, sums[i]) #set the max sum to the max of itself and the current sum (sums[i]).
    
    return max_sum

        