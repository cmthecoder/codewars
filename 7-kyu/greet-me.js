// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"


const greet = (name) => {
  name = name.toLowerCase()
  return 'Hello ' + name.replace(name[0], name[0].toUpperCase()) + '!'
}