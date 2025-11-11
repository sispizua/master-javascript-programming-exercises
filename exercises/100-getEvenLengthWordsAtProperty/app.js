function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    let even = obj[key];
    if (!Array.isArray(even) || even.length === 0 ){
      return []
    }
    return even.filter(el => el.length % 2 == 0);
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
