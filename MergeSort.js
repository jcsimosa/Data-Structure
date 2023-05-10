const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

// function mergeSort(arr){
//     debugger
//    if (arr.length === 1){
//     return arr
//    }
//    let midpoint = Math.floor(arr.length / 2)
//    let left = arr.slice(0 , midpoint)
//    let right = arr.slice(midpoint)
   
//    return merge(mergeSort(left) , mergeSort(right))
// }

// function merge(left, right){
//     debugger
    
//     const result = [];
//     let i = 0 , j = 0
//     while (i < left.length && j < right.length){
//         if (left[i] < right[j]){
//             result.push(left[i])
//             i++
//         } else {
//             result.push(right[j])
//             j++
//         }
//     }
//     let check = result.concat(left.slice(i)).concat(right.slice(j))
//     console.log('check',check)
//     return result.concat(left.slice(i)).concat(right.slice(j));
// }

function Merge(arr){
    if (arr.length === 1){
        return arr
    }

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    
    return traversing(Merge(left) , Merge(right))
}

function traversing(left , right){
    let result = []
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
const answer = Merge(arr)

console.log(answer)

