function findShortestWordAmongMixedElements(arr) {
    // your code here
    if(arr.length === 0 ){
        return "";
    }
    let shortes = null;
    for(const s of arr){
        if(typeof s === "string"){
            if(shortes === null || s.length < shortes.length){
            shortes = s;
            }
        }
    }
return shortes === null ? "" : shortes ;
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
