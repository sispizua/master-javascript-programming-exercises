let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    // your code here
    for (const key in obj){
        const val = obj[key]
        if(Object.prototype.hasOwnProperty.call(obj, key) && (typeof val === 'number' && val < num))
            delete obj[key];
    }
    return obj;

}

removeNumbersLessThan(5, obj);
console.log(obj);
