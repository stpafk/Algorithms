"""
Binary search is great for problems that revolves around searching for something
that is sortable.
"""

def binary_search(sortable, item):

    low = 0
    high = len(sortable) - 1
    count = 0

    while low <= high:
    
        mid = (low + high) // 2
        guess = sortable[mid]

        if guess == item:
            count+= 1
            return mid, count
        
        if guess < item:
            count+= 1
            low = mid + 1
        
        else:
            count+= 1
            high = mid - 1

    return None, count

print(binary_search([1, 3, 5, 7, 8], 3))
print(binary_search([i for i in range(20000)], 1))
        

