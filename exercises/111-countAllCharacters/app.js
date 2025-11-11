// Write your function here
function countAllCharacters (word){
    if (word.length === 0){
        return {};
    }
    const count = {};
    for(const ch of word){
        count[ch] = (count[ch] || 0) + 1;
    }
    return count;
}
let output = countAllCharacters('banana');
console.log(output);