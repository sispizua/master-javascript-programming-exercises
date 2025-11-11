function computePerimeterOfARectangle(length, width) {
  // your code here
  perimetre = (length*2) + (width * 2);
  return perimetre;
}

let output = computePerimeterOfARectangle(5, 2);
console.log(output); // --> 14
