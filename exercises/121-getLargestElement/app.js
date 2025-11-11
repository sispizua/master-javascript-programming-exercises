function getLargestElement(arr) {
  // your code here 
    if (arr.length === 0){
        return 0;
    }
    let largest = arr[0];
    for(const s of arr){
        if (s > largest){
            largest = s;
        }
    }
    return largest;

}
  


let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;