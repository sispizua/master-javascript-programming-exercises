// Write your function here
function findMinLengthOfThreeWords (str1, str2, str3){
    const result = Math.min(str1.length, str2.length, str3.length);
    return result;
}
let output = findMinLengthOfThreeWords('aujhvj', 'be', 'see');
console.log(output);