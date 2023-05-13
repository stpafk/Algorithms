

class Node:
    def __init__(self, value=None):
        self.value = value
        self.next = None

    def return_none(self):
        return self.value


class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        if self.is_empty():
            self.head = value
        else:
            curr = self.head
            while curr.next is not None:
                curr = curr.next

            curr.next = value

    def return_head(self):
        return self.head

    def is_empty(self):
        return not self.head

    def prepend(self, value):
        if self.is_empty():
            self.head = value
        else:
            value.next = self.head
            self.head = value

    def last_index(self):
        current = self.head
        while current.next is not None:
            current = current.next

        return current.value

    def at(self, index):
        i = 0
        curr = self.head
        while i != index:
            if curr.next is None:
                return "Not in linked list"
            curr = curr.next
            i += 1

        return curr.value

    def contains(self, item):
        curr = self.head

        while curr.next is not None:
            if curr.value == item:
                return True
            
            curr = curr.next

        return False

    def find(self, value):
        i = 0
        curr = self.head
        while curr.next is not None:
            if curr.value == value:
                return f"Found at index {i}"

            curr = curr.next
            i += 1

        return None

    def string(self):
        string = ""
        current = self.head
        while current is not None:
            string += f"{current.value}->"
            current = current.next
        string += "None"

        print(string)
        return


linkedList = LinkedList()
new_node = Node(1)

linkedList.append(new_node)
linkedList.prepend(Node(3))
linkedList.append(Node(4))
linkedList.string()
print(linkedList.contains(7))
print(linkedList.last_index())
print(linkedList.find(3))