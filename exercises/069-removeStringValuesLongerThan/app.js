function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (const key in obj){
        const val = obj[key];
        if (Object.prototype.hasOwnProperty.call(obj, key) && (typeof val ==='string' && val.length > num)){
              //eliminar propiedad si el largo del string es mayor a al valor asignado
            delete obj[key];
        }
    }
        
        return obj 
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
