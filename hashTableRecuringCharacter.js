class HashTable{
    constructor(size){
        this.data = new Array(size)
    }
    _hash(key){
        let hash = 0
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length 
        }
    }
    recurringCharacter(value){
        let map = {}
        for (let i = 0; i < value.length; i++){
            if (map[value[i]] !== undefined){
                return value[i] 
            } else {
                map[value[i]] = i
            }
        }
        return undefined
    }
}
let array = [2,5,1,2,3,5,1,2,4]

let myHashTable = new HashTable(50)
console.log(myHashTable.recurringCharacter(array))
