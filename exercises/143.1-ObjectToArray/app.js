function getAllKeys(obj) {
  // your code here
  if(obj === null || obj === undefined){
    return [];
  }
  const keys = [];
  for (const k in obj){
    if(Object.prototype.hasOwnProperty.call(obj, k)){
      keys.push(k)
    }
  }
  return keys;
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
