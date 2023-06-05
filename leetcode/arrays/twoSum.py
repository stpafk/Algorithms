class Solution(object):
    def twoSum(self, nums, target):
        mapping = {} #use hashing

        for i, j in enumerate(nums): #key value pairs
            diff = target - j #exp: 9 - 7 = 2 
            if diff in mapping: # does it exist "2" in mapping?
                return [mapping[diff], i] # then return it

            mapping[j] = i #else, append to mapping

        return