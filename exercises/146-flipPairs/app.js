function flipPairs(input) {
    // your code here
    let res = '';
  for (let i = 0; i < input.length; i += 2) {
    const a = input[i];
    const b = input[i + 1];
    res += (b !== undefined ? b : '') + a;
  }
  return res;
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
