function findNeedle(neddle , haystack){
   let neddleIndex = 0
   let haystackIndex = 0
   while (haystack < haystack.length){
        if (neddle[neddleIndex] == haystack[haystackIndex]){
            let foundNeddle = true
        }
        while (neddleIndex < neddle.length){
            if (neddle[neddleIndex] !== haystack[haystackIndex + neddleIndex]){
                foundNeddle = false
                break
            }
            neddleIndex++
        }
        if (foundNeddle){
            return true
            neddleIndex = 0
        }
        haystackIndex++
   }
   return false
}

console.log(findNeedle("def" , "abcdefghijklm"))