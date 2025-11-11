function computeSummationToN(n) {
  // your code here
  if (n === 0){
    return 0;
  }
  let summation = 0;
  for (let i= 0; i <= n; i++){
    summation += i
  }
  return summation;
  
}

let output = computeSummationToN(6);
console.log(output); // --> 21

