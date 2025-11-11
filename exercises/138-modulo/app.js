function modulo(num1, num2) {
    // your code here
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
return NaN;
    } 
  if (Number.isNaN(num1) || Number.isNaN(num2)){
return NaN;
  } 

  // División por cero 
  if (num2 === 0){
    return NaN;
  } 

  if (Object.is(num1, 0)){
  return num1;
  }  

  // Si el dividendo es infinito -> NaN
  if (!Number.isFinite(num1)){
 return NaN;
  }

  // Si el divisor es infinito -> el resto es num1
  if (!Number.isFinite(num2)){
return num1;
  } 

  const q = Math.trunc(num1 / num2); // sacando el resto sin 
  return num1 - q * num2;
}


let output = modulo(25, 4);
console.log(output); // --> 1
