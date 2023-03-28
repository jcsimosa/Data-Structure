// FIFO
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }
    peek(){
        return this.first
    }
    enqueue(value){
        let newNode = new Node(value)
        if (this.first === null){
            this.first = newNode
            this.last = this.first
        }
        else {
            this.last.next = newNode;
            this.last = newNode
        }
        this.length++
        return this
    }
}
let myQueue = new Queue()
myQueue.enqueue(10)
myQueue.enqueue(20)
console.log(myQueue.enqueue(30))