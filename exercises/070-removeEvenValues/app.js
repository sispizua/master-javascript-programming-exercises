function removeEvenValues(obj) {
  // your code here
    for (const key in obj){
        const val = obj[key];
        if (Object.prototype.hasOwnProperty.call(obj, key) && (typeof val ==='number' && obj[key] % 2 == 0)){
              //eliminar propiedad si el  valor es un numero es par
            delete obj[key];
        }
    }
        
    return obj 
  }




let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
