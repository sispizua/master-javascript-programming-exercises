// Write your function here
function removeElement (arr, num){
    let result = arr.filter((el => el !== num));
    return result;
}
let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output)