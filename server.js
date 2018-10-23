const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const robots = require('./routes/api/robots')

const app = express()

app.use(bodyParser.json())

const db = require('./config/keys').mongoURI

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.use('/api/robots', robots)
    
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}`))
