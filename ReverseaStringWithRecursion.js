//Implement a function that reverses a string using iteration...
//and then recursion!
function reverseString(str) {
    let arr = []
    for (let i = str.length-1; i > 0; i--){
        arr.push(str[i])
    }
    return arr.join('')
}

// console.log(reverseString('yoyo mastery'))

function reverseStringWithRecursion(str){
    if (str === "") {
        return "";
      } else {
        console.log(str.substr(1)) + str.charAt(0)
        return reverseStringWithRecursion(str.substr(1)) + str.charAt(0);
      }
}

console.log(reverseStringWithRecursion('yoyo mastery'))
//should return: 'yretsam oyoy'