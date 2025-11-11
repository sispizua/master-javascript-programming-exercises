// Write your function here
function getFirstElementOfProperty(obj, key){ 
    const val =obj[key]
    if(!Array.isArray(val) || val.length === 0 ){
        return undefined;
    } 
   return val[0];
}
let obj = {
  key: [1, 2, 4]
};
let output = getFirstElementOfProperty(obj, 'key');
console.log(output);