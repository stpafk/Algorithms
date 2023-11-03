"""
Binary search is great for problems that revolves around searching for something
that is sortable.
"""

def binary_search(sortable, item):

    low = 0
    high = len(sortable) - 1

    while low <= high:
        mid = (low + high) / 2
        guess = sortable[mid]

        if guess == item:
            return mid
        
        if guess < item:
            low = mid + 1
        
        if guess > item:
            high = mid - 1

    return None

print(binary_search([1, 3, 5, 7, 8], 4))
        

