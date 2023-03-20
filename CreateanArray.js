// [apple, pineaple, grapes, lemon, orange]
//     1       2       3       4       5
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
        return lastItem
    }
    deleteAtIndex(index){
        let item = this.array[index]
        this.shiftIndex(index)
        return item
    }
    shiftIndex(index){
        for (let i = index; i < this.length-1; i++){
            this.array[i] = this.array[i + 1]
        }
        delete this.array[this.length -1]
        this.length--
    }
}

let myArray = new Array()
 myArray.push('apple')
 myArray.push('grapes')
 myArray.push('lemon')
 myArray.push('orange')
 myArray.push('pinneaple')

//  myArray.pop()
myArray.deleteAtIndex(2)
 console.log(myArray)