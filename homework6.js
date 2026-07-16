function checkProbabilityTheory(count) {
let odds = 0;
let evens = 0;
for (let i = 1; i <= count; i++){
let rnd = Math.floor(Math.random() * (1000 - 100 + 1) + 100);
if (rnd % 2 === 0) {
  evens++; 
} else {
      odds++;
    }
}
  return `total numbers: ${count}, evens: ${evens}, odds: ${odds} \n odds probability: ${odds / count}, evens probability: ${evens / count}`;
}
 console.log(checkProbabilityTheory(1000));