let array = [99,44,6,2,1,5,63,87,283,4,0]

function bubbleSort(array){
    for (let i = 0; i < array.length; i++){

        for (let j = i + 1; j < array.length; j++){
            if (array[i] > array[j]){
                let temp = array[j]
                tvalue = array[j]
                array[j] = array[i]
                array[i] = temp
            }
        }
    }
    return array
}
console.log(bubbleSort(array))