function getLargestElementAtProperty(obj, key) {
    // your code here
    const largest = obj[key];
    if(!Array.isArray(largest) || largest.length === 0){
      return [];
    }
    return Math.max(...largest);
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
