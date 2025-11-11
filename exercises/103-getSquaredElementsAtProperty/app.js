function getSquaredElementsAtProperty(obj, key) {
    // your code here
    const square = obj[key];
    if(!Array.isArray(square) || square.length === 0){
      return []
    }
    return square.map(n => n **2)
    
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
