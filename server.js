const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

const { search, findHeroes, deleteHero, updateHero } = require('./controller')

let array = [
  {id: '1', name: 'Simon'},
  {id: '2', name: 'Pulsar'},
  {id: '3', name: 'Kianu'},
  {id: '4', name: 'Zed'}
]

app.use(cors())
app.use(bodyParser.json())
app.use((req, res, next) => {
  next()
})

app.get('/', (req, res) => {
  res.send('HEY HERO!')
})

app.get('/heroes', (req, res) => {
  res.send(array)
})

app.get('/heroes/:id', (req, res) => {
  const nameKey = req.params.id
  const searchHero = search(nameKey, array)
  res.send(searchHero)
})

app.get('/heroes/search/:name', (req, res) => {
  const name = req.params.name
  const heroes = findHeroes(name, array)
  res.send(heroes)
})

app.post('/heroes', (req, res) => {
  array.push({ id: String(+ array[array.length - 1].id + 1), name: req.body.name })
  res.send(array[array.length - 1])
})

app.delete('/heroes/:id', (req, res) => {
  const id = req.params.id
  array = deleteHero(id, array)
  res.json('Hero is deleted')
})

app.put('/heroes', (req, res) => {
  const hero = req.body
  updateHero(hero, array)
  res.json('Hero is updated')
})

app.listen(3000, () => console.log('Server running on port 3000'))