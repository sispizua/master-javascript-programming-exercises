   function getLongestWordOfMixedElements(arr) {
    // your code here
    if (arr.length === 0){
        return '';

    } 
  let longest = '';

  for (const el of arr) {
    if (typeof el === 'string' && el.length > longest.length) {
      longest = el; // en empate no se reemplaza, así se mantiene el primero
    }
}
return longest;
 }

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
