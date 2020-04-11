const express = require('express')
const app = express()
// const router = express.Router();
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// let bodyParser = require('body-parser');
// const {user, password} = require('/config.js');
app.use(cors())
app.get('/', (req, res) => {
  res.send('HEY!')
})

app.get('/send', (req, res) => {
  res.send(`hey send`)
})
app.listen(3000, () => console.log('Server running on port 3000'))
