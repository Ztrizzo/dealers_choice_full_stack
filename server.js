const express = require('express');
const app = express();
const path = require('path');
const { syncAndSeed, Color } = require('./db/db');

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json())

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

app.delete('/color/:id', async (req, res, next) => {
  try{
    const color = await Color.findByPk(req.params.id);
    color.destroy();
    res.sendStatus(204)
  }
  catch(error){
    next(error);
  }
})

app.post('/color', async (req, res, next) => {
  try{
    const newColor = await Color.create({
      name: req.body.name
    })
    res.send(newColor);
  }
  catch(error){
    next(error);
  }
})

app.put('/color/:id', async (req, res, next) => {
  try{
    const color = await Color.findByPk(req.params.id);
    color.favorite = !color.favorite;
    color.save();
    res.send(color);
  }
  catch(error){
    next(error)
  }
})