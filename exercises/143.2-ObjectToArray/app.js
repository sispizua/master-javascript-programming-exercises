function listAllValues(obj) {
  // your code here
  if(obj === null || obj === undefined){
    return [];
  }
  const value = [];
  for (const k in obj){
    if(Object.prototype.hasOwnProperty.call(obj, k)){
      value.push(obj[k])
    }
  }
  return value;
}


let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
