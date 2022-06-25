const express = require('express')

const path = require('path')

const createPath = (page) => path.resolve(__dirname, '8_views', `${page}.html`)

const app = express()

const PORT = 3000

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`)
})

app.get('/', (req, res) => {
  res.sendFile(createPath('index'))
})

app.get('/contacts', (req, res) => {
  res.sendFile(createPath('contacts'))
})

app.get('/about-us', (req, res) => {
  res.redirect('/contacts')
})

app.use((req, res) => {
  res.statusCode = 404
  res.sendFile(createPath('error'))
})
