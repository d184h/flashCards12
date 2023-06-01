require('@babel/register');

const express = require('express');
const path = require('path');
const ssr = require('./middleware/ssr');

const app = express();

const PORT = 3000;

const mainRoute = require('./routes/main.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(ssr);
app.use(getUser);

app.use('/', mainRoute);
app.use('/users', usersRoute);
app.use('/animals', animalsRoute);
app.use('/form-update-animal', animalUpdate);

app.listen(PORT, () => {
  console.log(`Этот сервер умирает на ${PORT} порту!`);
});
