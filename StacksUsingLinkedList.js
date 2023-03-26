class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack{
    constructor(value){
        this.top = null
        this.bottom = null
        this.lenght = 0
    }
    peek(){
        return this.top
    }
    push(value){
        let newNode = new Node(value)
        console.log(newNode)
        if (this.top === null){
            this.top = newNode
            this.bottom = newNode   
        } else {
            let holdingNode = this.top
            this.top = newNode
            this.top.next = holdingNode
        }
        this.lenght++
        return this
    }
}
let myStack = new Stack()
console.log(myStack.push('apple'))
myStack.push('google')
myStack.push('udemy')
console.log(myStack.peek())