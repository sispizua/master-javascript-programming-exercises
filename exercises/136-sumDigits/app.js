function sumDigits(num) {
    // your code here
     const s = String(num);
  let sum = 0;

  if (s[0] === '-') {
    // si es negativo
    for (let i = 1; i < s.length; i++) {
      const d = Number(s[i]);
      if (Number.isNaN(d)) continue; // si no hay caracteres numericos
      sum += (i === 1) ? -d : d;
    }
  } else {
    for (let i = 0; i < s.length; i++) {
      const d = Number(s[i]);
      if (!Number.isNaN(d)) sum += d;
    }
  }
  return sum;
}

let output = sumDigits(-316);
console.log(output); // --> 4
