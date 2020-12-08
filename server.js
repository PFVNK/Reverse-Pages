const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const fetch = require('node-fetch')
const path = require('path')

const app = express()

app.use(morgan('tiny'))
app.use(cors())

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`app listening on ${port}`))