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
        return this.data
    }
}

let myArray = new Array()
 myArray.push('apple')
 myArray.push('grapes')

 console.log(myArray)