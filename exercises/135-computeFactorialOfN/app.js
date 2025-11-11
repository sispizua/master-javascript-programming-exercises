function computeFactorialOfN(n) {
    // your code here
    if (n === 0){
    return 0;
  }
  let factorial = 1;
  for (let i= 1; i <= n; i++){
    factorial *= i
  }
  return factorial;
    
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
