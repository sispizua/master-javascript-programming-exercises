// Write your function here
function getElementsLessThan100AtProperty (obj, key){
    const result=obj[key]
    if(!Array.isArray(result)){
        return [];
    }
    return result.filter(el => el < 100);
}

let obj = {
  key: [1000, 20, 50, 500]
};
let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);