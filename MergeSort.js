let arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function mergeSort(arr){
    let len = arr.length
    if (len === 1){
        return arr
    }

    let midpoint = Math.floor(len / 2);
    let left = arr.slice(0 , midpoint)
    let right = arr.slice(midpoint)

    return traversing(mergeSort(left) , mergeSort(right))
}
function traversing(left, right){
    const result = []

    let i = 0
    let j = 0

    while (i < left.length && j < right.length){
        if (left[i] < right[j]){
            result.push(left[i])
            i++
        }
        else {
            result.push(right[j])
            j++
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
}

let answer = mergeSort(arr)

console.log(answer)