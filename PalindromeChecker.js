function Palindrome(string){
    let leftSide = 0
    let rightSide = string.length-1
    while (leftSide < rightSide / 2){
        if (string[leftSide] !== string[rightSide]){
            return false
        }
        leftSide++
        rightSide--
    }
    return true   
}

let str = "radar"

console.log(Palindrome(str))