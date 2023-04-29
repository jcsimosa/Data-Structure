let array = [99,44,6,2,1,5,63,87,283,4,0]

function insertionSort(array){
    for (let i = 1; i < array.length; i++){
        debugger
        let temp = array[i]
        
        let position = i - 1   
        
        while (position >= 0){
            if (array[position] > temp){
                
                array[position + 1] = array[position]
               
                position = position - 1
            } else {
                break
            }
            
            array[position+1] = temp
        }
    }
    // return array
}

//udemy exercise 
// let array = [99,99,6,2,1,5,63,87,283,4,0]

function insertionSort3(array) {
    const length = array.length;
      for (let i = 0; i < length; i++) {
          if (array[i] < array[0]) {
        //move number to the first position
        array.unshift(array.splice(i,1)[0]);
      } else {
        // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
        if (array[i] < array[i-1]) {
          //find where number should go
          for (var j = 1; j < i; j++) {
            if (array[i] >= array[j-1] && array[i] < array[j]) {
              //move number to the right spot
              array.splice(j,0,array.splice(i,1)[0]);
            }
          }
        }
      }
    }
    return array
  }
  console.log(insertionSort3(array))
















