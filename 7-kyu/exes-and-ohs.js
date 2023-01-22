// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {

  let numX = 0
  let numO = 0
  str = str.toLowerCase().split('')
  
  str.forEach(l => {
    if(l === 'x'){
      numX += 1
    } else if(l === 'o'){
      numO += 1
    }
  })
  
  return numX === numO ? true : false
}