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
let array = [4,2,7,1,3]

console.log(selectionSort(array))