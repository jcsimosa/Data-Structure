function selectionSort(array){
    for (let i = 0; i < array.length-1;i++){
        let lowestN = i
        for (let j = i + 1; j < array.length; j++){
            if (array[j] < array[lowestN]){
                lowestN = j
            }
        }
        if (lowestN !== i){
            let temp = array[i]
            array[i] = array[lowestN]
            array[lowestN] = temp
        }
    }
    return array
}
let array = [99,44,6,2,1,5,63,87,283,4,0]


console.log(selectionSort(array))

//udemy exercise 

function selectionSort2(array){
    for (let i = 0; i < array.length; i++){
        let lowestValueSoFar = i
        for (let j = i + 1; j < array.length; j++){
            if (array[j] < array[lowestValueSoFar]){
                lowestValueSoFar = j
            }
        }
        if (lowestValueSoFar !== i){
            let temp = array[i]
            array[i] = array[lowestValueSoFar]
            array[lowestValueSoFar] = temp 
        }
    }
    return array
}

console.log(selectionSort2(array))
