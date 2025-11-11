function fromListToObject(array) {
  // your code here
  const obj = {};
  if(!Array.isArray(array)){  // si no es array devulve obj vacio
    return obj;
  }
  for (const pair of array){ //por cada par crea un elemento del obj con key y value
    if(Array.isArray(pair) && pair.length >= 2){
      const[key, value] = pair;
      obj[key]= value;
    }
  }
  return obj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
