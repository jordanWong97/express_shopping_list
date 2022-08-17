//use arr to store items(obj{name: price}) in shop list
'use strict';

const express = require('express');

const app = express();

const db = require('./fakeDb');
const itemsRouter = require('./itemsRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/items', itemsRouter);

//get items






module.exports = app;