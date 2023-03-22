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
    printList(){
        let arr = []
        let currentNode = this.head
        while (currentNode !== null){
            arr.push(currentNode.value)
            currentNode = currentNode.next
        }
        return arr
    }
    insert(index, value){
        if (index > this.length){
            this.append(value)
        }
        let newNode = {
            value : value,
            next : null,
            prev : null,
        }
        let firstNode = this.traversingAtIndex(index-1)
        let afterNode = firstNode.next
        newNode.prev = firstNode
        newNode.next = afterNode
        firstNode.next = newNode
        afterNode.prev = newNode
        this.length++
        return this
    }
    traversingAtIndex(index){
        let traverse = 0
        let currentNode = this.head
        while (traverse <= index){
            currentNode = currentNode.next
            traverse++
        }
        return currentNode
    }
    remove(index){
        let firstNode = this.traversingAtIndex(index-1)
        let unwantedNode = firstNode.next
        let afterNode = unwantedNode.next
        firstNode.next = afterNode
        afterNode.prev = firstNode
        this.length--
        return this
    }
}

let myDoubleLinkedList = new DoubleLinkedList(10)
myDoubleLinkedList.append(20)
myDoubleLinkedList.append(30)
myDoubleLinkedList.preppend(5)
myDoubleLinkedList.preppend(1)
console.log(myDoubleLinkedList.insert(3 ,25))
console.log(myDoubleLinkedList.insert(3 ,29))
console.log(myDoubleLinkedList.remove(3))

console.log(myDoubleLinkedList.printList())