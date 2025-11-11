function filterEvenLengthWords(words) {
    // your code here
    let filter = words.filter((words) => words.length % 2 == 0);
    return filter;
    
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
