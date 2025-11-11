function isOldEnoughToDrinkAndDrive(age) {
  // your code here
  if(age >= 21){
    return true;
  }
  return false;
}
let output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false