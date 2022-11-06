const imc = (weigth, heigth) => {
  const calculatedHeigth = (heigth / 100)**2;
  const calculatedWeigth = weigth;
  const bmi = calculatedWeigth / calculatedHeigth ;
  console.log(bmi)
  switch (bmi) {
    case bmi < 18.5:
      return console.log("Magreza");
    case bmi > 18.5 && bmi < 24.9:
      return console.log("Peso Normal");
    case bmi > 25 && bmi < 29.9:
      return console.log("Obesidade");
    case bmi > 30 && bmi < 34.9:
      return console.log("Obesidade 2");
    case bmi > 40:
      return console.log("Obesidade 3 e 4")
    default:
      break;
  }
}

module.exports = imc;
