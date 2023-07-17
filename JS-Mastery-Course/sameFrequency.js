// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false


function sameFrequency(num1, num2){
  if(num1.length !== num2.length) return false
  
  let counter1 = {}
  let counter2 = {}
  
  for(let num of num1.toString()){
      counter1[num] = (counter1[num] || 0) + 1
  }
  
  for(let num of num2.toString()){
      counter2[num] =(counter2[num] || 0) + 1
  }
  
  for(let key in counter1) {
      if(!(key in counter2)){
          return false
      }
      
      if(counter2[key] !== counter1[key]){
          return false
      }
  }
  
  return true
}