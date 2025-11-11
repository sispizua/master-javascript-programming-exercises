function isEvenWithoutModulo(num) {
    // your code here
    if (!Number.isFinite(num)){
        return false;  
    } 
  const n = Math.trunc(num);                 // saca decimales
  return (n & 1) === 0;   // si es 0 es par
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
