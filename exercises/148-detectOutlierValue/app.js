function detectOutlierValue(string) {
    // your code here
    // Pasa a números 
  const nums = string.trim().split(/\s+/).map(Number);
  const parities = nums.map(n => Math.abs(n) % 2);

  // ¿Qué es mayoría?
  const oddCount = parities.reduce((a, b) => a + b, 0);
  const oddMajority = oddCount > nums.length / 2;

  // Si hay mayoría impar, el outlier es par (0); si no, es impar (1)
  const targetParity = oddMajority ? 0 : 1;

  // Índice del outlier (1-based)
  return parities.findIndex(p => p === targetParity) + 1;
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
