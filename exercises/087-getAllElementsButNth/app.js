function getAllElementsButNth(array, n) {
    // your code here
    return [...array.slice(0, n),...array.slice(n + 1)];
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
