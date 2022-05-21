const express = require('express')
const app = express()
const { engine} = require('express-handlebars')
const routes = require('./routes')

require('dotenv').config()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')


app.use(express.urlencoded({ extends: true}))
app.use(express.json())


app.use(express.static('public'))
app.use('/', routes)

app.listen(8081, () => {
    console.log('Server Iniciado')
})