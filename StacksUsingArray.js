class Stack {
    constructor(){
        this.array = []
    }
    peek(){
        return this.array[this.array.length-1]
    }
    push(value){
        return this.array.push(value)
    }
    pop(){
        return this.array.pop()
    }
}
let myStack = new Stack()
myStack.push('google')
myStack.push('udemy')
myStack.push('facebook')
myStack.push('discord')
myStack.pop()

console.log(myStack)
