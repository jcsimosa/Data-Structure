function hasDuplicate(array) {
    let numSteps = 0
 for (let i = 0; i <= array.length; i++){
    for (let j = i + 1 ; j <= array.length; j++){
        numSteps++
        if (array[i] === array[j]){
            return true  
        } 
    }
}
console.log(numSteps)
return false
}
function hasDuplicate2(array){
    let arr = []
    for (let i = 0; i < array.length; i++){
        console.log(i)
        if (arr[array[i]] === 1){
            return arr
        } else {
            arr[array[i]] = 1
        }
    }
    return false
}

let array = [3,5,8,10,10]

console.log(hasDuplicate2(array))