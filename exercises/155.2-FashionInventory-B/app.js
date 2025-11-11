let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function renderAverageCostPerDesigner(inventory) {
    // your code here
  const result = [];

  for (const designer of inventory) {
    let total = 0;
    let count = 0;

    for (const shoe of designer.shoes) {
      total += shoe.price;
      count += 1;
    }

    const average = count ? total / count : 0;

    result.push({
      name: designer.name,
      averagePrice: average
    });
  }

  return result;
}


console.log(renderAverageCostPerDesigner(currentInventory));
