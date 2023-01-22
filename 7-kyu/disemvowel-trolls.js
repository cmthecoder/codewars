// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  vowels = ['a', 'A','e','E', 'i','I','o', 'O','u','U']
  const strArr = str.split('')
  return  strArr.filter(char => !vowels.includes(char)).join('')
}