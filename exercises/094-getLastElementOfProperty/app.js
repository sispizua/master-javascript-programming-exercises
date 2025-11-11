// Write your function here
function getLastElementOfProperty(obj, key){
    const result = obj[key];
    if(!Array.isArray(result)){
        return undefined;
    }
    return result[result.length -1];
}
let obj = {
  key: [1, 2, 5]
};
let output = getLastElementOfProperty(obj, 'key');
console.log(output);