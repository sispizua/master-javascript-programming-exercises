// Write your function here
function getOddLengthWordsAtProperty(obj, key){
    const result = obj[key];
    if(!Array.isArray(result)){
        return [];
    }
    return result.filter(el => el.length % 2 != 0 );
}
let obj = {
  key: ['It', 'has', 'some', 'words']
};
let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output);