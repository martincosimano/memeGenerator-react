const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./server/config/db')

dotenv.config( { path: './server/config/config.env'})

connectDB()

const app = express();

app.use('/api/memes', require('./server/routes/memes'));

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))