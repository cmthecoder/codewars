// Simple, remove the spaces from the string, then return the resultant string.


function noSpace(x){
  x = x.split('').filter(x => !x.includes(' ')).join('')
  return x
}