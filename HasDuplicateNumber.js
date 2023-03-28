function hasDuplicate(array) {
    let numSteps = 0
 for (let i = 0; i <= array.length; i++){
    for (let j = i + 1 ; j <= array.length; j++){
        numSteps++
        if (array[i] === array[j]){
            console.log(array[i] , array[j])
            return true  
        } 
    }
}
console.log(numSteps)
return false
}

let array = [3,5,8,10,10]

console.log(hasDuplicate(array))