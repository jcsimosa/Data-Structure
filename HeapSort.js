let arr = [5,67,20,4,31,54,23,786,98]

//first we create the heap, in this case a max heap
//as arguments we pass the array, the size of the heap we are going to build and the index of the array
function maxHeap(arr, heapSize, i){

    let largest = i
    let left = 2 * i + 1
    let right = 2 * i + 2

    //we have to compare the left side with the largest if it is true we modify the largest

    if (left < heapSize && arr[left] > arr[largest]){
        largest = left
    }
    //we do the same with the right side
    if (right < heapSize && arr[right] > arr[largest]){
        largest = right
    }
    //we check if largest is equal to i, if it is not we swap the values
    if (largest !== i){
        let temp = arr[i]
        arr[i] = arr[largest]
        arr[largest] = temp
    // and now we call the heap method on our array
        maxHeap(arr, heapSize,largest)
    }
}
//now we create our sorting algorith
function heapSort(arr){
    
    let len = arr.length
    
    //we call our max heap to create our heap 
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--){
        maxHeap(arr, len, i)
    }
    //we swap the max value(parent node) for our last value(child node) 
    for (let i = len - 1; i >= 0; i--){
        let temp = arr[0]
        arr[0] = arr[i]
        arr[i] = temp
        
        //we call our maxHeap method with our new arrange array
        maxHeap(arr,i,0)
    }
    return arr
}

function maxHeap2(arr, heapSize, i){
    
    let leftChild = 2 * i + 1
    let rightChild = 2 * i + 2
    let largest = i

    if (leftChild < heapSize && arr[leftChild] > arr[largest]){
        largest = leftChild
    }
    if (rightChild < heapSize && arr[rightChild] > arr[largest]){
        largest = rightChild
    }
    if (largest !== i){
        let temp = arr[i]
        arr[i] = arr[largest]
        arr[largest] = temp

        maxHeap2(arr, heapSize,largest)
    }
}
function heapSort2(arr){
    let len = arr.length
    if ( len === 1){
        return arr
    }
    for (let i = Math.floor(len / 2) - 1; i > -1; i--){
        maxHeap2(arr,len,i)
    }
    for (let i = len - 1; i > -1; i--){
        let swap = arr[0]
        arr[0] = arr[i]
        arr[i] = swap

        maxHeap2(arr,i,0)
    }
    return arr
}

function maxHeap3(arr, heapSize, i){

    let largestSoFar = i
    let leftS = 2 * i + 1
    let rightS = 2 * i + 2

    if (leftS < heapSize && arr[leftS] > arr[largestSoFar]){
        largestSoFar = leftS
    } 
    if (rightS < heapSize && arr[rightS] > arr[largestSoFar]){
        largestSoFar = rightS
    }
    if (largestSoFar !== i){
        let temp = arr[i]
        arr[i] = arr[largestSoFar]
        arr[largestSoFar] = temp

        maxHeap3(arr, heapSize, largestSoFar)
    }
}

function heapSort3(arr){

    let len = arr.length

    for (let i = Math.floor(len / 2) - 1; i >= 0; i--){
        maxHeap3(arr, len , i)
    }
    
    for (let i = len - 1; i >= 0; i--){
        let temp = arr[0]
        arr[0] = arr[i]
        arr[i] = temp

        maxHeap3(arr, i , 0)
    }
    return arr
}


// console.log(heapSort3(arr))

let nums = [3,3]
let target = 6

var twoSum = function(nums, target) {
    let disct = {};
   debugger
   for (let i = 0; i < nums.length; i++) {
       let rest = target - nums[i];
       if (disct[rest]) {
           return [disct[rest], i];
       }
       disct[nums[i]] = i;

   }
};
