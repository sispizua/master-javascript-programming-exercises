function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    const arr = obj[key]
    
        if(!Array.isArray(arr) || arr.length === 0){ // valida que sea array y que no este vacio
            return 0;
        }
        let suma = 0;
        for(let i = 0; i < arr.length; i++){
        suma += arr[i];
        }
        return suma;
}

let obj = {
    key: [4, 1, 8, 9]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
