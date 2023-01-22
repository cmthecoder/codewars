// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// h = 0
// m = 1
// s = 1

// result = 61000

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59


function past(h, m, s){
  let clock = ((h*3.6e+6)+(m*60000)+(s*1000))
  return clock
}