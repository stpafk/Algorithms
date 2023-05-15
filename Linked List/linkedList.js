
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
//
class linkedList {
    constructor() {
        this.head = null;
    }

    append(value) {

        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head
            while (curr.next != null) {
                curr = curr.next;
            }
        
            curr.next = newNode;
        }
    }

    toString() {
        let string = "[";
        let curr = this.head;
        
        while (curr != null) {
            string += `${curr.value},`
            curr = curr.next;
        }
        string += "]"
        return string

    }

    size() {
        let i = 0;
        let curr = this.head;
        
        while (curr != null) {
            i++;
            curr = curr.next;
        }

        return i;
    }

    head() {
        return this.head;
    }

    tail() {
        let curr = this.head;

        while (curr.next != null) {
            curr = curr.next;
        }

        return curr.value;
    }

    at(index) {
        let i = 0;
        let curr = this.head;

        while (i != index) {
            if (curr.next === null) {
                return "not in linked list";
            }
            curr = curr.next;
            i++;
        }

        return curr.value

    }

    pop() {
        let curr = this.head

        while (curr.next.next != null) {
            curr = curr.next;
        }

        curr.next = null;

        return "Popped";
    }

    contains(value) {
        let curr = this.head;

        if (curr.value === value) {
            return true
        }

        while (curr.next != null) {
            curr = curr.next;
            if (curr.value === value) {
                return true;
            }
        }
        return false;
    }

    find(index) {
        let curr = this.head;
        let i = 0;

        while (curr.value != null) {
            if (curr.value === index) {
                return i;
            }
            curr = curr.next;
            i++;
        }

        return null
    
    }

}


let link = new linkedList()
link.append(2);
link.append(3);
link.append(4);
link.append(5);
link.append(6);
console.log(link.size());
console.log(link.tail());
console.log(link.at(0))
link.pop();
console.log(link.contains(2));
console.log(link.find(5));
console.log(link.toString());