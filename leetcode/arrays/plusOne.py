# in this problem, I would take an array of integers and return a new array with the concatenation of the integers + 1.
#I did in a very pythonic way.

class Solution(object):
  
    def plusOne(self, digits):
        string = ""
        for x in digits:
            string += str(x)

        integer = list(str(int(string) + 1))

        return [int(x) for x in integer]
