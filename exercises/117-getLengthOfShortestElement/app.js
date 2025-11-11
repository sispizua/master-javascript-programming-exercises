function getLengthOfShortestElement(arr) {
    // your code here
    if(arr.length === 0){
        return 0;
    }
    let minLen = Infinity; // el infinity es para que cualquiler valor real sea mayor y remplace al shortes
    for (const s of arr){
        const len = s.length;
        if (len < minLen){
            minLen = len;
        } 
        return minLen;
    }
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
