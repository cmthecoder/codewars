// DESCRIPTION:
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).



function DNAStrand(dna){
  let arr = []
  dna = dna.split('')
  for(l of dna) {
    if(l === 'A'){
      arr.push('T')
    } else if (l === 'T'){
      arr.push('A')
    } else if (l === 'C'){
      arr.push('G')
    } else if (l === 'G'){
      arr.push('C')
    }
  }
  return arr.join('')
}