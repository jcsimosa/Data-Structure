class HashTable {
    contructor(size){
        this.data = new Array(size)
    }
    _key(key){
        let hash = 0
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.chartCodeAt(i) * i) % this.data.length
        } 
        return hash    
    }
    
}