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
}

let myLinkedList = new LinkedList(10)
myLinkedList.append(15)
myLinkedList.append(20)
myLinkedList.append(25)
myLinkedList.preppend(1)


console.log(myLinkedList.printList())