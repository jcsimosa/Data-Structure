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
        arr[largest] = arr[i]
    // and now we call the heap method on our array
        maxHeap(arr, heapSize,largest)
    }
}
//now we create our sorting algorith