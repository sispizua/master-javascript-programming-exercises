function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    const val = obj[key];
    if(!Array.isArray(val) || val.length === 0){
    return 0;
    } 
    let product = 1;
    for( let i=0; i < val.length; i++){
      product = product * val[i];
      
    }
    return product;
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
