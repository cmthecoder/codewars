// Given an array of integers, return a new array with each value doubled.

// [1, 2, 3] --> [2, 4, 6]



function maps(x){
  let newArr = []
  x.forEach(num => {
    num *= 2
    newArr.push(num)
  })
   return newArr
 }