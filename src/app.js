const { expression } = require("@babel/template");

const express = require('express')
// const routes = require('./router/routes')

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.json({})
})

module.exports = app;