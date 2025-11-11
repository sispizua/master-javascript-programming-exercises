function computeSumOfAllElements(arr) {
  // your code here
  let suma = 0 ;
  for(let i=0;i < arr.length ;i++){
    suma += arr[i];
  }
    return suma;
  
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
