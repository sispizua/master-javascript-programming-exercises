function getAllLetters(str) {
    // your code here
    if(str.length === 0){
        return [];
    }
    const result = [];
    for (let i = 0;i < str.length;i++){
        const charActual = str[i];
        result.push(charActual);
    }
    return result;
        
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
