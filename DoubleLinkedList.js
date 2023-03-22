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
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this     
    }
    preppend(value){
        let newNode = {
            value : value,
            next : null,
            prev : null
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this 
    }
    
}

let myDoubleLinkedList = new DoubleLinkedList(10)
myDoubleLinkedList.append(20)
myDoubleLinkedList.append(30)
myDoubleLinkedList.preppend(5)
myDoubleLinkedList.preppend(1)

console.log(myDoubleLinkedList)