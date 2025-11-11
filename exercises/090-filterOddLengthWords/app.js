function filterOddLengthWords(words) {
    // your code here
    let filter = words.filter((words) => words.length % 2 != 0);
    return filter;
    
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
