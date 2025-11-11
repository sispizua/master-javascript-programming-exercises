function findLongestPalindrome(sentence) {
  let best = '';

  for (let i = 0; i < sentence.length; i++) {
    for (let j = i + 1; j <= sentence.length; j++) {
      const sub = sentence.slice(i, j);
      if (isPalindrome(sub) && sub.length >= best.length) {
        // >= asegura que, con mismo tamaño, nos quedamos con el último
        best = sub;
      }
    }
  }
  return best;
}

function reverseString(str) {
  // inversa simple
  return str.split('').reverse().join('');
}

function isPalindrome(word) {
  // comparación case-insensitive; los espacios cuentan
  const lower = word.toLowerCase();
  return lower === reverseString(lower);
}

// Prueba
let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"
