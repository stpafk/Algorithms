class Solution(object):
    def maxProduct(self, nums):
        if not nums:
            return 0
    
        # Initialize variables
        maxProduct = curMax = curMin = nums[0]
        
        # Iterate through the array
        for i in range(1, len(nums)):
            n = nums[i]
            
            if n < 0:
                # Swap curMax and curMin
                curMax, curMin = curMin, curMax
            
            # Update curMax and curMin
            curMax = max(n, curMax * n)
            curMin = min(n, curMin * n)
            
            # Update maxProduct
            maxProduct = max(maxProduct, curMax)
        
        return maxProduct