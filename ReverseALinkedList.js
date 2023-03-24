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
    preppend(data){
        let newNode = {
            data : data,
            next : null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    insert(data , index){
        if(index >= this.length){
            return this.append(data)
        }

        let newNode = {
            data : data,
            next : null
        }
        let holdingReference = this.traversingAtIndex(index-1)
        let afterNode = holdingReference.next
        newNode.next = afterNode
        holdingReference.next = newNode
        this.length++
        return this.printList()
    }
        
    traversingAtIndex(index){
            let traversing = 0
            let currentNode = this.head
            while (traversing !== index) {
                currentNode = currentNode.next
                traversing++
            }
            return currentNode
        }
    printList(){
        let arr = []
        let currentNode = this.head
        
        while (currentNode !== null){
            arr.push(currentNode.data)
            currentNode = currentNode.next
        }
        return arr
    }
    deleteAtIndex(index){
        let holdingNode = this.traversingAtIndex(index-1)
        let unwantedNode = holdingNode.next
        let afterNode = unwantedNode.next
        holdingNode.next = afterNode
        this.length--
        return this.printList()
    }
    reverse(){
        let firstNode = this.head
        this.tail = this.head
        let secondNode = firstNode.next
        while (secondNode){
            
            let temp = secondNode.next
            secondNode.next = firstNode
            firstNode = secondNode
            secondNode = temp
        }
        this.head.next = null
        this.head = firstNode
        return this.printList()
    }
}

let myLinkedList = new LinkedList(10)
myLinkedList.append(15)
myLinkedList.append(20)
myLinkedList.append(25)
myLinkedList.preppend(1)
myLinkedList.insert(200 , 3)
myLinkedList.insert(22 , 4)
myLinkedList.insert(2 , 5)
myLinkedList.insert(100 , 10)

// console.log(myLinkedList.printList())
console.log(myLinkedList.reverse())
console.log(myLinkedList)