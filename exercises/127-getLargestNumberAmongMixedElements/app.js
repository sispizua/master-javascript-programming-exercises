function getLargestNumberAmongMixedElements(arr) {
 if (arr.length === 0){
return 0;
 } 

  let hasNumber = false;
  let maxNum = -Infinity;

  for (const el of arr) {
    if (typeof el === 'number' && Number.isFinite(el)) {
      hasNumber = true;
      if (el > maxNum){
      maxNum = el;
      } 
    }
  }

  return hasNumber ? maxNum : 0;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
