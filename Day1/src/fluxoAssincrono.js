function semAsync(num1, num2) {
  if(num2 === 0 ) throw new Error("Número não pode ser dividido por 0");

  const resultado = num1 / num2;
  return resultado
};

try{
  const result = semAsync(1, 0);
  console.log("O resultado é  %s", result);
}catch(e) {
  console.log(e.message);
};

function comAsync(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if(num2 === 0 ) reject(new Error("Número não pode ser dividido por 0"));
    const resultado = num1 / num2;
    resolve(resultado);
  })
  return promise
}

// comAsync(1,0)
//  .then((result) => console.log("com async ", result))
//  .catch((e) => console.log("async: ",e.message));

//Utilizando Async/Await

const usandoAsync = async () => {
  console.log("Async", await comAsync(2,5) )

}

usandoAsync();
