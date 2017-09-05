
const express = require('express')
const bodyParser = require('body-parser')
require('now-logs')('george-now-key')
const app = express()
app.use(express.static('./'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/debug', function (req, res) {
  console.log(req.body)
  res.status(200).end()
})
app.listen(process.env.PORT || 8000)
