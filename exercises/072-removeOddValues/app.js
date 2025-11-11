function removeOddValues(obj) {
    // your code here
    
    for (const key in obj){
      const val = obj[key]
      if(Object.prototype.hasOwnProperty.call(obj, key) && (typeof obj[key] === 'number' && obj[key] % 2 !== 0)){
        delete obj[key];
      }
       
    }
    return obj; 
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
