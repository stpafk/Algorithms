#in this algorithm we should find the target value in a O(log n) time complexity. So, I used binary search to traverse the sorted array.
def searchInsert(self, nums, target):
    #define left and right
    left = 0
    right = len(nums) - 1
    
    while left <= right:
      #get the mid
      mid = (left + right) // 2
      if nums[mid] == target:
        return mid
      # if mid value is less than target, we look towards the right side of the array
      elif nums[mid] < target:
        left = mid + 1
      # if mid is bigger than target, we look to the left side of the array
      else:
        right = mid - 1
    # if the target value is not found, we return the left variable (the position were the target SHOULD be.)
    return left
