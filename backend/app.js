const express = require('express');
const routes = require('./routes/index');
const mongoose = require('mongoose');
const cors = require('cors');

const port = 2022;
const host = 'localhost';
const app = express();
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use('/', routes);
mongoose.connect('mongodb+srv://puja:negi@cluster0.ydh9p.mongodb.net/zomatoClone?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(port, host, () => {
            console.log(`server is running  at ${host}:${port}`);

        });
    }).catch(err => console.log(err))