let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function getLaceNameDataForShoes(inventory) {
    // your code here
    const result = [];

  for (const designer of inventory) {
    for (const shoe of designer.shoes) {
      // Separa por espacios y comas; conserva guiones como en "low-top" o "lace-up"
      const nameWords = shoe.name.split(/[,\s]+/).filter(Boolean);

      // Busca la primera palabra que contenga "lace" (case-insensitive)
      const targetWordIndex = nameWords.findIndex(w => /lace/i.test(w));

      if (targetWordIndex !== -1) {
        result.push({ nameWords, targetWordIndex });
      }
    }
  }

  return result;
    
    
}

console.log(getLaceNameDataForShoes(currentInventory));
