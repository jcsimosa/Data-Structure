class Array {
    constructor(){
        this.array = {}
        this.length = 0
    }
    search(index){
        return this.array[index]
    }
    push(data){
        this.array[this.length] = data
        this.length++
        return this.array
    }
    pop(){
        let lastItem = this.array[this.length-1]
        delete this.array[this.length-1]
        this.length--
        return this.array
    }
}

let myArray = new Array()
 myArray.push('apple')
 myArray.push('grapes')
 myArray.push('lemon')
 myArray.pop()
 console.log(myArray)