function getAverageOfElementsAtProperty(obj, key) {
  // your code here
let average = obj[key];
if(!Array.isArray(average) || average.length === 0 ){
  return 0;
}
let suma = 0;
    for (let i= 0; i < average.length; i++){
        suma+=average[i];
    }
    const result= suma / average.length;
    return result;
}
let obj = {
  key: [1, 2, 3,5,6,6,7,7,8]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // 