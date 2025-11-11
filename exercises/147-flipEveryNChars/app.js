function flipEveryNChars(input, n) {
    // your code here
    if (typeof n !== 'number' || n < 1){ // si n es cero lo devuelve tal cual 
        return input;
    } 
  let res = '';
  for (let i = 0; i < input.length; i += n) {  // recorre el string 
    const pice = input.slice(i, i + n); // separa el string dependiendo n
    res += pice.split('').reverse().join(''); // los une 
  }
  return res;
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
