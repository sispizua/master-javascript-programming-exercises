function convertDoubleSpaceToSingle(str) {
    // your code here
    return str.replaceAll("  "," ");// corta cada vez que vee un doble espacio y une con un espacio
}                                   // utilizando renplaceAll() pra que haga todop en uno 

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
