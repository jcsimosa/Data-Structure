class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i =0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
      }
      insert(key, value){
        let address = this._hash(key);
        if (!this.data[address]){
            this.data[address] = []
        }
        this.data[address].push([key,value])
        return this.data
      }
      get(key){
        let address = this._hash()
      }
}
const myHashTable = new HashTable(50);
myHashTable.insert("orange", 15)
myHashTable.insert("grapes", 12)
myHashTable.insert("apples", 20)

console.log(myHashTable)

