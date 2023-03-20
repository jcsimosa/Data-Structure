let array = [1,5,15,23,38,46,61,76,80,100]

let binarySearch = (array, target) => {
    
    let begginingIndex = 0

    let endOfIndex = array.length-1

    
    while(begginingIndex <= endOfIndex){
          
        let midPoint = Math.floor((begginingIndex + endOfIndex) / 2)
        
        let valueAtMid = array[midPoint]

        if (valueAtMid === target){
            return midPoint
        }
        else if (valueAtMid < target){
            begginingIndex = midPoint +1
        }
        else if(valueAtMid > target){
            endOfIndex = midPoint-1
        }
    }
    return false 
}
console.log(binarySearch(array, 5))