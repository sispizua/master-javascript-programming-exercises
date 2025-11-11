function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  const len1 = word1.length;
  const len2 = word2.length;
  const len3 = word3.length;

  return len1 + len2 + len3;
}

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
