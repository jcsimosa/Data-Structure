//write a function that uses a stack to reverse a string.

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

let str = 'abcde'

function reversingString(str){
    
    let myStack = new Stack()

    for(let i = 0; i < str.length; i++){
        myStack.push(str[i])
    }
    
    let newStr = ''

    while (myStack.peek()){
        newStr += myStack.pop()
    }
    return newStr
}

console.log(reversingString(str))