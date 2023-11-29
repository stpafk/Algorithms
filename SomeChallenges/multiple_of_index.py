def multiple_of_index(arr):
    return [j for i,j in enumerate(arr) if (j==0 and i==0) or (i!=0 and j%i==0)]