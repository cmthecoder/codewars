// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array


function capitalizeFirst(array) {
  if (array.length === 0) {
    return [];
  }

  const firstWord = array[0];
  const capitalizedWord = firstWord[0].toUpperCase() + firstWord.slice(1);

  return [capitalizedWord, ...capitalizeFirst(array.slice(1))];
}

// function capitalizeFirst (array) {
//   if (array.length === 1) {
//     return [array[0][0].toUpperCase() + array[0].substr(1)];
//   }
//   const res = capitalizeFirst(array.slice(0, -1));
//   const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
//   res.push(string);
//   return res;
// }


// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']