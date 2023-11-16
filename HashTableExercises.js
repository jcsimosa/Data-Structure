//exercise Number 1 

let int1 = [1,2,3,4,5,6]
let int2 = [0,2,4,6,8]

function interArray(array1, array2){
    let result = []
    let HashTable = {}

    for(let i = 0; i < array1.length; i++){
        if(!HashTable[array1[i]]){
            HashTable[array1[i]]= true
        }
        else {
            continue
        }
    }

    for (let j = 0; j < array2.length; j++){
        if (!HashTable[array2[j]]){
            continue
        } else {
            result.push(array2[j])
        }

    }
    
    return result
}



//exercise 2 

let arr = ['a','b','c','d','c','e']

function returnFirstRepeatedValue(array){
    let hashTable = {};
    for(let i = 0; i< array.length; i++){
        if(!hashTable[array[i]]){
            hashTable[array[i]] = true;
        }
        else{
            return array[i];
        }
    }
}

//exercise 3 

let arr1 = 'the quick brown box jumps over a lazy dog'
let arr2 = 'abcdfeghijklmnopqrstuvwxyz'

function returningMissingAlphabetLetter(array1, array2){
    let result = {}

    for (let i = 0; i < array1.length; i++){
        result[array1[i]] = true
    } 

    for (let j = 0; j < array2.length; j++){
        if (!result[array2[j]]){
            return array2[j]
    }
}
}




//exercise 4 

let str = 'minimum'

function returningNonDuplicateCharacter(string){
    let result = {}
    
    for (let i = 0; i < string.length; i++){
        if (result[string[i]]){
            result[string[i]]++
        } else {
            result[string[i]] = 1
        }
    }
    
    for (let j = 0; j < string.length; j++){
        if (result[string[j]] === 1) {
            return string[j]
        }
    }
}

console.log(returningNonDuplicateCharacter(str))