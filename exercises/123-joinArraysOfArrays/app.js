function joinArrayOfArrays(arr) {
  // your code here
    return arr.reduce((acc, cur) => acc.concat(cur), []);

}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
