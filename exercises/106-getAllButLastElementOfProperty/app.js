function getAllButLastElementOfProperty(obj, key) {
    // your code here
    const last= obj[key];
    if(!Array.isArray(last) || last.length === 0){
      return[];
    }
    return last.slice(0, -1);
}

let obj = {
  key: [1, 2, 3,4,5]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
