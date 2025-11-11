function getElementOfArrayProperty(obj, key, index) {
    // your code here
const element = obj[key];
if(!Array.isArray(element) || element.at.length === 0){
    return undefined;
}
return element[index];
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
