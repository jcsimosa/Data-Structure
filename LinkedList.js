class LinkedList {
    constructor(data){
        this.head = {
            data : data,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(data){
        let newNode = {
            data : data,
            next : null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
}

let myLinkedList = new LinkedList(10)
myLinkedList.append(15)
myLinkedList.append(20)
myLinkedList.append(25)


console.log(myLinkedList)