// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"



// return masked string
function maskify(cc) {
  if(cc === '' || cc.length <= 4) return cc
  
  const lastFour = cc.slice(-4)
  let firstNumbers = cc.slice(0, -4)
  firstNumbers = firstNumbers.replaceAll(firstNumbers,'#'.repeat(firstNumbers.length))
  
  
  return firstNumbers.concat(lastFour)
}


function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

// card numbers is good
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length,'#')
}

maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);