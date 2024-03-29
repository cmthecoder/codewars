// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
  if(n <= -1){
    return
  }
  
  n = Array.from(String(n), Number).sort((a, b) => b - a).join('')
  console.log(n)
  return +n
  
}

// Other ways to solve it

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

function descendingOrder(n) {
  return +n.toString().split('').sort().reverse().join('');
}