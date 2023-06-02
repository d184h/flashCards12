require('@babel/register');

const express = require('express');
const path = require('path');
const ssr = require('./middleware/ssr');

const app = express();

const PORT = 3000;

const mainRouter = require('./routes/main.routes');
const cardsRouter = require('./routes/views/cards.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(ssr);

app.use('/', mainRouter);
app.use('/cards', cardsRouter);

app.listen(PORT, () => {
  console.log(`server ${PORT}`);
});
