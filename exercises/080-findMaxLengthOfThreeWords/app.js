// Write your function here
function findMaxLengthOfThreeWords(str1, str2, str3){
    const result = Math.max(str1.length, str2.length, str3.length);
    return result ;
}
let output = findMaxLengthOfThreeWords('a', 'iywdfioaygwodfiaybe', 'see');
console.log(output); // --> 3