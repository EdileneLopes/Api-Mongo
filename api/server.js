const app = require('./src/app');
const PORT = 5557;

app.listen(PORT, () => {
    console.log(`Servidorzinho filmes Ghibli e Herois  rodando em http://localhost:${PORT}`)
});
