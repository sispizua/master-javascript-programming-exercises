function getLengthOfLongestElement(arr) {
    // Your code here
    if(arr.length === 0){  // array vacio, devuelve 0
        return 0;
    }
    let maxlen = 0;
    for(const s of arr){   // por cada string del array 
        const len = s.length;  // dice que len es = a la longitud del string
        if(len > maxlen){  // si len es > max len 
            maxlen = len;  // maxlen es = a Len. Asi hasta optener el string mas largo 
        }
        
    }
return maxlen;  // una vez que itero todos los string devuelve el mas largo de todos 
}

let output = getLengthOfLongestElement(['on15415e', 'two', 'three']);
console.log(output); // --> 5
