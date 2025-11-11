function getOddElementsAtProperty(obj, key) {
    // your code here
    const odd = obj[key];
    if(!Array.isArray(odd) || odd.length === 0 ){
      return [];
    }
    return odd.filter(el => el % 2 != 0);
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
