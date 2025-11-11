function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    const taxRAte = 0.095;
    const tipRate = 0.15;
    const tax = preTaxAndTipAmount * taxRAte
    const tip = preTaxAndTipAmount * tipRate
    return preTaxAndTipAmount + tax + tip;
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
