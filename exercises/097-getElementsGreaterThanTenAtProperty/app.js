// Write your function here
function getElementsGreaterThan10AtProperty(obj, key){
    const result = obj[key];
    if(!Array.isArray(result)){
        return []
    }
    return result.filter(el => el > 10);
}js
let obj = {
  key: [1, 20, 30]
};
let output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output)