const fs = require('fs').promises;

const read = async () => {
  try {
  const teste = await fs.readFile('./filmes.json');
  const convert = JSON.parse(teste);
  console.log(convert)
  return convert;
  }catch(err) {
   console.error(`Erro: ${err.message}`); 
  }
}

module.exports = read;
