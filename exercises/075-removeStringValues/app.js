function removeStringValues(obj) {
    // your code here
    for(const key in obj){
        if(Object.prototype.hasOwnProperty.call(obj, key) && typeof obj[key] === 'string' )
            delete obj[key];
    }
    return obj
}

let obj = {
    name: 'Sam',
    age: 20
}

removeStringValues(obj);
console.log(obj); // --> { age: 20 }
