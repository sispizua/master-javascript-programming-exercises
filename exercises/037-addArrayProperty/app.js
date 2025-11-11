function addArrayProperty(obj, key, arr) {
  // Add your code after this line
  obj[key]= arr;
  return obj
}
let myObj = {};  // aca el array no tiene propiedad
let myArray = [1, 3];
console.log(myObj); 
addArrayProperty(myObj, 'myProperty', myArray); // entonces aca se crea la propiedad que va a contener 1, 3 (myArray)
console.log(myObj.myProperty);

// quiere decir que siempre voy a necesitar crear un porpiedad vacia para poder agregarla a mi obj
//con los valores que necesite