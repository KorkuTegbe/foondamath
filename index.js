require('dotenv').config()
const express = require('express')
const app = express()
const http = require('http')
const path = require('path')
const server = http.createServer(app)


app.use(express.static(path.join(__dirname, 'public')))



const PORT = process.env.PORT ?? 3000
server.listen(3400, ()=>{
    console.log(`Server started on port ${PORT}`)
})