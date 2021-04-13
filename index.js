// [data, next] -> [data, next] -> [data, next] 

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {
        const node = new Node(data)

        if (this.tail) {
            this.tail.next = node
        }

        if (!this.head) {
            this.head = node
        }

        this.tail = node
    }

    prepend(data) {
        const node = new Node(data, this.head)

        this.head = node

        if (!this.tail) {
            this.tail = node
        }
    }

    toArray() {
        let current = this.head
        const output = []

        while (current) {
            output.push(current)
            current = current.next
        }

        return output
    }

    find(data) {
        if (!this.head) {
            return
        }

        let current = this.head

        while (current) {
            if (current.data = data) {
                return current
            }
            current = current.next
        }

    }

    insertAfter(after, data) {
        const found = this.find(after)

        if (!found) {
            return
        }

        const node = new Node(data, found.next)

        found.next = node
    }


    remove(data) {
        if (!this.head) {
            return
        }

        while (this.head && this.head.data === data) {
            this.head = this.head.next
        }

        let current = this.head

        while (current.next) {
            if(current.next.data === data) {
                current.next = current.next.next
            } else {
                current = current.next
            }
        }

        if (this.tail.data === data) {
            this.tail = current
        }

    }
}

const list = new LinkedList()
list.append('One')
list.append('two')
list.prepend('Zero')
list.prepend('0')
// list.remove('0')

console.log(list.toArray())
