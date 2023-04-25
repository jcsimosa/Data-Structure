let array = [5,2,87,4,24,31,59]

function bubbleSort(array){
    for (let i = 0; i < array.length; i++){

        for (let j = i + 1; j < array.length; j++){
            let tvalue = 0
            if (array[i] > array[j]){
                tvalue = array[j]
                array[j] = array[i]
                array[i] = tvalue
            }
        }
    }
    return array
}
console.log(bubbleSort(array))