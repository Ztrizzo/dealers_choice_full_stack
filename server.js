const express = require('express');
const app = express();
const path = require('path');
const { syncAndSeed, Color } = require('./db/db');

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));

const init = async () => {
  await syncAndSeed();
}

init();

app.get('/colors', async (req, res, next) => {
  try{
    const colors = await Color.findAll()
    res.send(colors);
  }
  catch(error){
    next(error);
  }
})