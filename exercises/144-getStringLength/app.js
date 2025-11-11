function getStringLength(string) {
    // your code here
    let count = 0;
    for (const _ of string){ // el buble for cuenta cada caracter y lo suma en count
    count++;
    } 
    return count;
}

let output = getStringLength('hello');
console.log(output); // --> 5
