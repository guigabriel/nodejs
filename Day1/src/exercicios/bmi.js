const readline = require('readline-sync');
const bmi = require('./index')

const main = async () => {
  const heigth = readline.questionFloat("What is your heigth ? ");
  const weigth = readline.questionFloat("What is your weigth ? ")
  
  bmi(weigth, heigth); 
}

main();
