function squareElements(arr) {
  // your code here
  let square = [];
  for(const n of arr){
    square.push(n**2);
  }
  return square;
  
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
