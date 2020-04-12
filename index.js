const express = require('express')
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
let bodyParser = require('body-parser');
// const {user, password} = require('/config.js');
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use('/', router)

app.get('/', (req, res) => {
  res.send('HEY!')
})

app.get('/send', (req, res) => {
  res.send(`hey`)
})

let transport = {
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
    user: 'harry.g.patrick94@gmail.com',
    pass: 'Frdqwzvs112'
  }
}

let transporter = nodemailer.createTransport(transport)

app.listen(3000, () => console.log('Server running on port 3000'))
