require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./router/index')
const PORT = process.env.PORT || 5000
const app = express()
const errorMiddleware = require('./middlewares/error-middleware')
app.use(express.json())
app.use(cors({

    origin: process.env.CLIENT_URL


}))
app.use('/api', router)
app.use(errorMiddleware)

const start =  async () => {
        try {
            await mongoose.connect(process.env.MONGO)
            app.listen(PORT, () => console.log('server is working'))
        } catch (error) {
            console.log(error)
        }
}

start()


module.exports = app
