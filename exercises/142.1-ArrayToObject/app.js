function transformFirstAndLast(array) {
  // your code here
  if(!Array.isArray(array) || array.length=== 0){
    return {};
  }
  const key = array[0]; // key es el primer elemento del arr
  const value =array[array.length -1]; // value es el ultimo elem
  return{[key]: value}; // formamos el obj
  
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
