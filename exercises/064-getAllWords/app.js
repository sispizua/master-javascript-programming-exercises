function getAllWords(str) {
    // your code here
  const clean = str.trim();      // quita espacios al inicio/fin
  if (clean.length === 0){
    return [];  
  } 

  const parts = clean.split(' ');     // separa por espacio simple
  return parts;
}

       

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
