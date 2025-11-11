function getNthElement(array, n) {
  // Add your code after this line
  if (0 <= n  && n < array.length){
    return array[n];
  }
  else{
    return undefined;
  }
}

console.log(getNthElement([5,8,3], 2));