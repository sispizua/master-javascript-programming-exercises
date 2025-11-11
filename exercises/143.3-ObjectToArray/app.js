function convertObjectToList(obj) {
  // your code here
  if (obj == null || typeof obj !== 'object'){  // si elobjeto esta vacio o no es un obj, devuelve list vacia
    return [];
  } 
  return Object.entries(obj);
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
