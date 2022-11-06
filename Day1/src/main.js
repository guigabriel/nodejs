const { writeTeam } = require('./trabalhandoComJson')
const readline = require('readline-sync');
const teams = async () => {
  const team = readline.question("Qual o nome do time ? ");
  const state = readline.question("Qual o estado do time ?")
  
  // Ao invés de deixar os valores estáticos, eu vou criar um objeto que vai receber esses valores da linha de comando.

  const newTeam = { team, state };
  writeTeam(newTeam);
  console.log("Novo time registrado com sucesso. ");
}

teams();
