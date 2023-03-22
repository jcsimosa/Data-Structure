class DoubleLinkedList {
    constructor(value){
        this.head = {
            value : value,
            next : null,
            prev : null
        }
        this.tail = this.head
        this.length = 1
    }   
    append(value){
        let newNode = {
            value : value,
            next : null,
            prev : null
        }
        let holdingNode = this.tail
        newNode.prev = holdingNode
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this     
    }
}

let myDoubleLinkedList = new DoubleLinkedList(10)
myDoubleLinkedList.append(20)
myDoubleLinkedList.append(30)

console.log(myDoubleLinkedList)