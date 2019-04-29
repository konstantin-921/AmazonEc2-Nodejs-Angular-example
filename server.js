const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('HEY!')
})
app.listen(3000, () => console.log('Server running on port 3000'))