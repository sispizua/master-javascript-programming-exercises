// Write your function here
function getElementsThatEqual10AtProperty(obj, key){
    const result = obj[key];
    if(!Array.isArray(result)){
        return [];
    }
    return result.filter(el => el === 10)
    
}
let obj = {
  key: [1000, 10, 50, 10, 10]
};
let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output);
