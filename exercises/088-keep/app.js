// Write your function here
function keep(arr, num) {
    return arr.filter(el => el === num)

}
let output = keep([1, 2, 3, 2, 1,2,3,4,5,6,7,2], 2)
console.log(output);