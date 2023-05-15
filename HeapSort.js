// Array.prototype.heapify = function (index, heapSize) {
// debugger
//     let largest = index
//     const leftIndex = 2 * index + 1
//     const rightIndex = 2 * index + 2
  
//     if (leftIndex < heapSize && this[leftIndex] > this[largest]) {
//       largest = leftIndex
//     }
  
//     if (rightIndex < heapSize && this[rightIndex] > this[largest]) {
//       largest = rightIndex
//     }
  
//     if (largest !== index) {
//       const temp = this[largest]
//       this[largest] = this[index]
//       this[index] = temp
  
//       this.heapify(largest, heapSize)
//     }
//   }
  
//   /*
//    * Heap sort sorts an array by building a heap from the array and
//    * utilizing the heap property.
//    * For more information see: https://en.wikipedia.org/wiki/Heapsort
//    */
//   function heapSort (items) {
//     debugger
//     const length = items.length
  
//     for (let i = Math.floor(length / 2) - 1; i > -1; i--) {
//       items.heapify(i, length)
//     }

//     for (let j = length - 1; j > 0; j--) {
//       const tmp = items[0]
//       items[0] = items[j]
//       items[j] = tmp
//       items.heapify(0, j)
//     }
//     return items
//   }
  
  // Implementation of heapSort

  function sort(arr){
    let length = arr.length
    
    for (let i = Math.floor(length / 2) -1; i >= 0; i--){
        heapify(arr,length, i)
    
        for (let i = length - 1; i > 0; i--){
            let temp = arr[0]
            arr[0] = arr[i]
            arr[i] = temp

            heapify(arr, i, 0)
        }
    }
  }

  function heapify(arr,length, i){
    
    let largest = i
    let leftChild = 2 * i + 1
    let rightChild = 2 * i + 2

    if (leftChild < length && arr[leftChild] > arr[largest]){
        largest = leftChild
    }
    if (rightChild < length && arr[rightChild] > arr[largest]){
        largest = rightChild
    }
    if (largest != i){
        let temp = arr[i]
        arr[i] = arr[largest] 
        arr[largest] = temp

        heapify(arr , length , largest)
    }
  }
  
  function printArray(arr)
    {
        var N = arr.length;
        for (var i = 0; i < N; ++i)
            console.log((arr[i] + " "))
         
    }
 
 
    var arr = [12, 11, 13, 5, 6, 7];
    var N = arr.length;
 
    sort(arr);
 
   console.log(( "Sorted array is"))
    printArray(arr, N);
 
  
  const ar = [4,10,3,5,1]
  
  console.log(sort(ar))

  