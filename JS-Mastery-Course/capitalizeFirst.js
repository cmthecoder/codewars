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


// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']