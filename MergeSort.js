const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function mergeSort(arr){
   if (arr === 1){
    return arr
   }
   let midpoint = Math.floor(arr.length / 2)
   let left = arr.slice(0 , midpoint)
   let right = arr.slice(midpoint)
   
   return merge(mergeSort(left) , mergeSort(right))
}

function merge(left, right){
    
}

console.log(mergeSort(arr))