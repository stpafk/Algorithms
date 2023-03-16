# this one was about removing a given element and return the lenght of the "new" array.

def remove_element(nums, val):
    #counter
    i = 0
    for j in range(len(nums)):
        #if the index value is not val, give it's index to be i. In this way, the "val" values will be replaced.
        if nums[j] != val:
            nums[i] = nums[j]
            i += 1
    return i
  
  nums = [3, 2, 2, 3]
val = 3
new_nums = remove_element(nums, val)
print(new_nums)  # Output: [2, 2]
