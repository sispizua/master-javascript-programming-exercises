function isRotated(str1, str2) {
    // your code here
    if (typeof str1 !== 'string' || typeof str2 !== 'string'){
      return false;
    } 
  if (str1.length !== str2.length){
    return false;}      // rotaciones conservan longitud
  // Si b es subcadena de a+a, entonces b es una rotación de a
  return (str1 + str1).includes(str2);
    
  }
  
  console.log(isRotated('hello world', 'orldhello w')); // --> true
  console.log(isRotated('hello world', 'omrel wp')); // --> false
  
