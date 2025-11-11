// Write your function here
function getNthElementOfProperty(obj, key, num){
    const result = obj[key];
    if(!Array.isArray(result) || num > result.length){
        return undefined;
    }
    return result[num];
}
let obj = {
  key: [1, 2, 6]
};
let output = getNthElementOfProperty(obj, 'key', 2);
console.log(output);