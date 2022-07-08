const express = require('express');
const {connect} = require('./configs/db');
const app = express();

app.use(express.json());

module.exports = app;