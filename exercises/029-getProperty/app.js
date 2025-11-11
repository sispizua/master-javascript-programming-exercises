function getProperty(obj, key) {
  // your code here
  return obj[key];
}
let car = {
  model: 'toyota',
  year: '1994'
};

console.log(getProperty(car, 'model'))