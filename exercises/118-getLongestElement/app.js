function getLongestElement(arr) {
    // your code here
    if(arr.length === 0){
        return "";
    }
    let longest = arr[0];
    for (const s of arr){
        const len = s.length;
        if(s.length > longest.length ){
            longest = s;
        }
    }
    return longest;
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
