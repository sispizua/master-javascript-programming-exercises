function removeNumberValues(obj) {
    // your code here
    for (const key in obj){
        const val = obj[key];
        if (Object.prototype.hasOwnProperty.call(obj, key) && Number.isInteger(val))
            delete obj[key];
    }
    
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
