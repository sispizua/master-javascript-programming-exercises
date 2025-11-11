function joinArrays(arr1, arr2) {
  // your code here
  const NewArr =arr1.concat(arr2);
  return NewArr;
}

let output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
