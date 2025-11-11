// Write your function here
function computeAverageOfNumbers (nums){
    if (nums.length === 0){
        return 0;
    }
    let suma = 0;
    for (let i= 0; i < nums.length; i++){
        suma+=nums[i];
    }
    const promedio = suma / nums.length;
    return promedio;
}
let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output);