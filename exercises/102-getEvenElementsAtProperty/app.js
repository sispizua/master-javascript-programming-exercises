function getEvenElementsAtProperty(obj, key) {
    // your code here
    const even= obj[key];
    if(!Array.isArray(even) || even.length === 0){
      return [];
    }
    return even.filter(el => el % 2 == 0);
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
