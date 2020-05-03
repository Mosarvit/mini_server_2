const express = require('express')
const app = express()

app.get('/', async (req, res) => {
  res.json({ message: 'Hello from Server 2!' })
})

module.exports = app