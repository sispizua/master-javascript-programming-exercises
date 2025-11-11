function search(array, value) {
  // your code here
    let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // punto medio redondeado hacia abajo
    const guess = array[mid];

    if (guess === value) return mid;
    if (guess < value) {
      left = mid + 1;      // busca en la mitad derecha
    } else {
      right = mid - 1;     // busca en la mitad izquierda
    }
  }

  return null; // no encontrado
}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // --> 4
