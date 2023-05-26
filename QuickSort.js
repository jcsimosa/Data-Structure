const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function quickSort(items){
    
//     let length = items.length
//     if (length <= 1){
//         return items
//     }

//     let pivot = items[0]
//     let greater = []
//     let lesser = []

//     for (let i = 1; i < length;i++){
//         if (items[i] > pivot){
//             greater.push(items[i])
//         } else {
//             lesser.push(items[i])
//         }
//     }
//     const sorted = [...quickSort(lesser),pivot,...quickSort(greater)]
//     return sorted
// }
function quickSort(arr){
    
    
    if (arr.length <= 1){
        return arr
    }
    let length = arr.length 

    let lesser = []
    let greater = []
    let pivot = arr[0]

    for (let i = 1; i < length; i++){
        if (pivot > arr[i]){
            lesser.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }
    let sorted = [...quickSort(lesser),pivot,...quickSort(greater)]
    return sorted
}
    
//Select first and last index as 2nd and 3rd parameters
// console.log(quickSort(numbers))


function quickSort2(array, left, right){
    const len = array.length; 
    let pivot;
    let partitionIndex;
  
    if(left < right) {
      pivot = right;
      partitionIndex = partition(array, pivot, left, right);
      
      //sort left and right
      quickSort2(array, left, partitionIndex - 1);
      quickSort2(array, partitionIndex + 1, right);
    }
    return array;
  }
     
  function partition(array, pivot, left, right){
    let pivotValue = array[pivot];
    let partitionIndex = left;
  
    for(let i = left; i < right; i++) {
      if(array[i] < pivotValue){
        swap(array, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
  }
  
  function swap(array, firstIndex, secondIndex){
      var temp = array[firstIndex];
      array[firstIndex] = array[secondIndex];
      array[secondIndex] = temp;
  }
  
  //Select first and last index as 2nd and 3rd parameters
//   quickSort2(numbers, 0, numbers.length - 1);
//   console.log(numbers);

function quickSort3(arr){
    let len = arr.length
    let pivot = arr[0]
    let greater = []
    let lesser = []

    for(let i = 1; i < len; i++){
        if (arr[i] < pivot){
            lesser.push(arr[i])
        }
        else {
            greater.push(arr[i])
        }
    }
    let sorted = [...quickSort(lesser), pivot, ...quickSort(greater)]

    return sorted 
}

console.log(quickSort3(numbers))
