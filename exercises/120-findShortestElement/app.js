function findShortestElement(arr) {
    // your code here 
    if (arr.length === 0){
        return "";
    }
    let shortes = arr[0];
    for(const s of arr){
        if (s.length < shortes.length){
            shortes = s;
        }
    }
    return shortes;

}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'