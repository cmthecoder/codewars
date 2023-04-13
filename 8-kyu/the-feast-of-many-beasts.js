// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// Test.assertEquals(feast("great blue heron", "garlic naan"), true)
// Test.assertEquals(feast("chickadee", "chocolate cake"), true)
// Test.assertEquals(feast("brown bear", "bear claw"), false)
// Test.assertEquals(feast("marmot", "mulberry tart"), true)
// Test.assertEquals(feast("porcupine", "pie"), true)
// Test.assertEquals(feast("cat", "yogurt"), false)
// Test.assertEquals(feast("electric eel", "lasagna"), false)
// Test.assertEquals(feast("slow loris", "salsas"), true)
// Test.assertEquals(feast("ox", "orange lox"), true)
// Test.assertEquals(feast("blue-footed booby", "blueberry"), true)

function feast(beast, dish) {
  console.log(beast.charAt(beast[0]));

  if (
    beast.charAt(beast[0]) === dish.charAt(dish[0]) &&
    beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)
  ) {
    return true;
  } else {
    return false;
  }
}


function feast(beast, dish) {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

function feast(beast, dish) {
  return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
}