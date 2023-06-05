"""
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
"""

class Solution(object):
    def productExceptSelf(self, nums):
        res = [1] * (len(nums)) #needs an array the same lenght

        prefix = 1 # will use to manipulate res

        for i in range(len(nums)):
            res[i] = prefix #assign the value to rss array
            prefix *= nums[i] #multiply that
        
        postfix = 1

        for j in range(len(nums) - 1, -1, -1): #iterate backwards
            res[j] *= postfix 
            postfix *= nums[j]

        return res

