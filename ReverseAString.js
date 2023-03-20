let str = "Hello My name is Charlie"

function reverseAString(str){
    let array = []

    for (let i = str.length -1; i >= 0; i--){
        array.push(str[i])
    }

    return array.join('')
}

function reverseAString2(str){
    return str.split('').reverse().join('')
}

console.log(reverseAString2(str))