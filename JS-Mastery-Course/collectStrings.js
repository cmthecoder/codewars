// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string


function collectStrings(obj){
  let stringCollection = []
  
  for(let key in obj){
      if(typeof obj[key] === 'string'){
          stringCollection.push(obj[key])
      } else if(typeof obj[key] === 'object'){
          stringCollection = stringCollection.concat(collectStrings(obj[key]))
      } 
  }
  console.log(stringCollection)
  return stringCollection
}

// const obj = {
//   stuff: "foo",
//   data: {
//       val: {
//           thing: {
//               info: "bar",
//               moreInfo: {
//                   evenMoreInfo: {
//                       weMadeIt: "baz"
//                   }
//               }
//           }
//       }
//   }
// }

// collectStrings(obj) // ["foo", "bar", "baz"])