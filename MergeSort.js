let arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function mergeSort(arr){
    debugger
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
    debugger
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



function merge2(arr){
    if (arr.length === 1){
        return arr
    }

    let len = arr.length
    let midpoint = Math.floor( len / 2)
    let leftS = arr.slice(0 , midpoint)
    let rightS = arr.slice(midpoint)

    return traversing2(merge2(leftS),merge2(rightS))
}

function traversing2(left, right){
    let result = []
    let l = 0
    let r = 0

    while(l < left.length && r < right.length){
        if (left[l] < right[r]){
            result.push(left[l])
            l++
        }
        else {
            result.push(right[r])
            r++
        }
    }
    let resulta = result.concat(left.slice(l)).concat(right.slice(r))
    
    return resulta
}


console.log(merge3(arr))
