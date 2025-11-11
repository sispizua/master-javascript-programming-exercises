function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  
  const p = principal;
  const r =interestRate;
  const n = compoundingFrequency;
  const t = timeInYears;
  
  const A = p *(1+ r/n) ** (n* t);
  return A - p;

  
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543
