const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(items){
    
    let length = items.length
    if (length <= 1){
        return items
    }

    let pivot = items[0]
    let greater = []
    let lesser = []

    for (let i = 1; i < length;i++){
        if (items[i] > pivot){
            greater.push(items[i])
        } else {
            lesser.push(items[i])
        }
    }
    const sorted = [...quickSort(lesser),pivot,...quickSort(greater)]
    return sorted
}
    
//Select first and last index as 2nd and 3rd parameters
console.log(quickSort(numbers))



