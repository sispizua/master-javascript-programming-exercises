function getElementsUpTo(array, n) {
  // your code here
  const newAr = array.slice(0, n);
  return newAr;
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
