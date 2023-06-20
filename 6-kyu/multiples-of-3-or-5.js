function solution(number) {
  if (number <= 0) return 0;

  let arr = [];

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push(i);
    } else if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }

  let total = arr.reduce((a, b) => a + b);

  if (total <= 0) {
    return 0;
  } else {
    return total;
  }
}
