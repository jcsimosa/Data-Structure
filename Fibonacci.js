// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
    let answer = 0
    for (let i = 0; i <= n; i++){
       answer = answer + i 
       console.log('fibonacci pattern', answer , i )
    }
    return answer
  }

  console.log(fibonacciIterative(3));
  
  function fibonacciRecursive(n) {
    
  }
  
  console.log(fibonacciRecursive(3))