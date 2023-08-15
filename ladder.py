
def ladder(s, n) --> str:

    string = ""
    index = n 

    for x in range(n):
        
        temp_str = (" " * index) + (s * (x + 1)) + "\n"
        string += temp_str
        index -= 1


    print(string)


ladder("|", 5)