class Stack {
    constructor(){
        this.array = []
    }
    peek(){
        return this.array[this.array.length-1]
    }
}
let myStack = new Stack()
myStack.push('google')
myStack.push('udemy')
myStack.push('facebook')
myStack.push('discord')


console.log(myStack)
