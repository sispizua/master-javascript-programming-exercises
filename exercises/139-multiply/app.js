function multiply(num1, num2) {
    // your code here
  
  if (num1 === 0 || num2 === 0){
    return 0;
  } 

  // Determinar el signo del resultado
  let isPositive = true;
  if (num1 < 0) { num1 = -num1; isPositive = !isPositive; }
  if (num2 < 0) { num2 = -num2; isPositive = !isPositive; }

  // Iterar por el menor para hacer menos sumas
  if (num1 < num2) { const tmp = num1; num1 = num2; num2 = tmp; }

  let result = 0;
  for (let i = 0; i < num2; i++) {
    result += num1;
  }

  return isPositive ? result : -result;
}

let output = multiply(4, 7);
console.log(output); // --> 28
