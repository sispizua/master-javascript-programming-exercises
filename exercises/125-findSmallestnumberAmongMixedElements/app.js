function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if (arr.length === 0){
    return 0;
  }
  let smallest = Infinity;
  for (const el of arr){
    if(typeof el === "number" && Number.isFinite(el)){

      }if(el < smallest){
      smallest = el;
    }

  }
  return smallest === Infinity ? 0 : smallest;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
