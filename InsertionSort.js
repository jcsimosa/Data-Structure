let array = [99,44,6,2,1,5,63,87,283,4,0]

function insertionSort(array){
    for (let i = 1; i < array.length; i++){
        let temp = array[i]
        console.log(temp)
        let position = i - 1   
    
        while (position >= 0){
            if (array[position] > temp){
                array[position + 1] = array[position]
                position = position - 1
            } else {
                break
            }
            array[position+1] = temp
        }
    }
    return array
}
console.log(insert(array))




















