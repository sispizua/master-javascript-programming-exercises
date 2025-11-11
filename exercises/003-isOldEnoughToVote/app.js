function isOldEnoughToVote(age) {
  // your code here
  if(age >=18){
    return true;
  }
  return false;
}
let output = isOldEnoughToVote(22);
console.log(isOldEnoughToVote(output));