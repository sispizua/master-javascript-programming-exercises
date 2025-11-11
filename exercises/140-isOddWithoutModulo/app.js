function isOddWithoutModulo(num) {
    // your code here
    if (!Number.isFinite(num)){
        return false;  
    } 
  const n = Math.trunc(num);                 // saca decimales
  return (n & 1) !== 0;   // si es 1 es impar
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
