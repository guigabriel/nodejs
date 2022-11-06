const fs = require('fs').promises;

const readTeams = async() => {
  try {
  const data = await fs.readFile('./data.json');
  // Na linha team nós transformamos uma string em um objeto.
  const team = JSON.parse(data);
  return team
  }catch(err) {
  console.error(`Erro: ${err}`);
  }
}

const writeTeam = async (newTeam) => {
  try{
   // Ler os arquivos do meu data.JSON
  const oldTeams = await readTeams();
  // Na linha newTeams nós pegamos o objeto criado na função readTeams e transformamos em uma string, já que vamos escrever no arquivo.
  const newTeams = JSON.stringify([...oldTeams, {id:0 , ...newTeam}]);
  await fs.writeFile('./data.json', newTeams);

  }
  catch(err) {
  console.error(`Erro: ${err.message}`)
  }
}

module.exports = {
readTeams,
writeTeam
}
