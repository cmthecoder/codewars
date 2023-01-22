// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.


function reverseWords(str) {
  str = str.split('').reverse().join('')
  let newStr = str.split(' ').reverse().join(' ')
  return newStr
}