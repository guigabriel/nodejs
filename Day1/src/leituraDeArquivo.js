const fs = require('fs').promises;

const main = async () => {
  try {
    const data = await fs.readFile('./meuArquivo.txt', 'utf-8');
    console.log(data);
  } catch(err) {
  console.error(`Erro ao tentar ler o arquivo: ${err.message}`);
  } 
}
main();

const write = async () => {
  try{
    fs.writeFile('./meuArquivo.txt', 'meu textão');
    console.log('Arquivo escrito com sucesso!');
  }catch(err) {
    console.error(`Deu ruim: ${err.message}`);
  }
}
write();
