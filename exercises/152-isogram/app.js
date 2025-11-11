function isIsogram(text) {
  // your code here
   const s = text.toLowerCase();      // ignorar mayúsculas/minúsculas
  const seen = new Set();

  for (const ch of s) {
    if (seen.has(ch)) return false; // letra repetida
    seen.add(ch);
  }
  return true;
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
