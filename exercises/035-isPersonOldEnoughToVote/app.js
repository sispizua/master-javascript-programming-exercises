function isPersonOldEnoughToVote(person) {
  // Add your code after this line
  return person.age >= 18;
}

let obj = {
  age: 19
};

console.log(isPersonOldEnoughToVote(obj));