function getSmallestElementAtProperty(obj, key) {
    // your code here
  const smallest = obj[key];
    if(!Array.isArray(smallest) || smallest.length === 0){
      return [];
    }
    return Math.min(...smallest);
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
