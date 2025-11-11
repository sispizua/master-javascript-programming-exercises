function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
  let result = arr1.concat(arr2, arr3);
  return result;
}
let output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output);