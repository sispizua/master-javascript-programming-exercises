function transformEmployeeData(array) {
  // your code hereif
  if(!Array.isArray(array)){
    return []
  }
    return array.map((employeePairs) => {
    const obj = {};
    for (const pair of employeePairs) {
      if (Array.isArray(pair) && pair.length >= 2) {
        const [key, value] = pair;
        obj[key] = value; 
      }
    }
  return obj;
  });
 }
 let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output);
