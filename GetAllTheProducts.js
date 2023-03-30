//a function that takes an array of numbers of return every possible result by multiplying the numbers.
function GetAllTheProducts(array){
    let products = []
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
            products.push(array[i] * array[j])
        }     
    }
    return products
}

let array = [1,2,3,4,5]

console.log(GetAllTheProducts(array))

//this exercise has a big O Notation of 0(n2), there is a nested loop which 90 percent of the time means O(n2)