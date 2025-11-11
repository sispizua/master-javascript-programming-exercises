function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    // Validación correcta
  if (typeof score !== 'number' || !Number.isFinite(score) || score > 100 || score < 0) {
    return 'INVALID SCORE';
  }

  let grade;
  if (score >= 90) {
    grade = 'A';
  } else if (score >= 80) {
    grade = 'B';
  } else if (score >= 70) {
    grade = 'C';
  } else if (score >= 60) {
    grade = 'D';
  } else {
    
    return 'F';
  }

  // casos especiales con el + y -
  if (score === 100) return 'A+';

  const last = score % 10;
  const sign = last <= 2 ? '-' : last >= 8 ? '+' : '';

  return grade + sign;
}



let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
