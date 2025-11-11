let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
  for (const key in obj2) {    // recorre las propiedades del obj2
    if (Object.prototype.hasOwnProperty.call(obj2, key)) { // esto asegura que solo usamos propiedades del obj2
      if (!Object.prototype.hasOwnProperty.call(obj1, key)) { // si esta propiedad esta en obj1 evita modificarla
        obj1[key] = obj2[key];                         //  Si las dos condiciones se cumplen agrega la propiedad a obj1
      }
    }
  }
  return obj1;   // devuelve el obj1 modificado 
}

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}