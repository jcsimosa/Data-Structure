const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function mergeSort(arr){
   if (arr.length === 1){
    return arr
   }
   let midpoint = Math.floor(arr.length / 2)
   let left = arr.slice(0 , midpoint)
   let right = arr.slice(midpoint)

   console.log('left',left, 'right ',right)
   
   return merge(mergeSort(left) , mergeSort(right))
}

function merge(left, right){
    console.log('a',left,'b',right)
    const result = [];
    let i = 0 , j = 0
    while (i < left.length && j < right.length){
        if (left[i] < right[j]){
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }
    console.log(left , right)
    return result.concat(left.slice(i)).concat(right.slice(j));
}

const answer = mergeSort(arr)
console.log(answer)