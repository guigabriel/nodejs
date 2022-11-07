const express = require('express');
const movies = require('./filmes.json')
const app = express();
// Sempre lembrar de usar essa func abaixo para não receber NULL.
 app.use(express.json());

// Quando for fazer uma query dessa, lembrar que o parâmetro sempre vai ser /movies/searc?q=nome-da-pesquisa
app.get('/movies/search', async(req, res) => {
  try {
    const { q } = req.query;

    if(q) {
      const filteredMovies = movies.filter((item) =>  item.movie.includes(q));
      return res.status(200).json(filteredMovies);
    }
    res.status(200).end();
  } catch (error) {
   res.status(500).send({message: error.message}); 
  }
})

// Lista de acordo com o id passado na URL
app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  const get = movies.find((a) => a.id === Number(id));
  res.status(200).json(get);
});

app.get('/movies', (req, res) => {
  res.status(200).json(movies);
});

app.post('/movies', (req, res) => {
  const env = req.body;
  movies.push(env);
  res.status(200).json(movies);
});

app.delete('/movies/:id', (req, res) => {
  const { id } = req.params;
  const get = movies.findIndex((a) => a.id === Number(id));
  movies.splice(get, 1);
  res.status(200).json({message: `Item do id ${id} ecluido com sucesso`});
});

module.exports = app
