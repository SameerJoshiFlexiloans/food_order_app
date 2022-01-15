const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://sameerjoshi:sam1234@cluster0.etyik.mongodb.net/RestaurantsDB?retryWrites=true&w=majority');

app.use('/',require('./router'));

app.listen(4001);

console.log('Server started on port 4001');