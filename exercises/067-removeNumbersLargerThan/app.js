let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // your code here
    for (const key in obj){
        const val = obj[key];
        if (Object.prototype.hasOwnProperty.call(obj, key) && (typeof val ==='number' && val > num)){
              //eliminar propiedad si el numero es mayor a al valor asignado y solo si es un numero
            delete obj[key];
        }
    }
        
        return obj 

}

removeNumbersLargerThan(5,obj);
console.log(obj);