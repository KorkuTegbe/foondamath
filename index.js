require('dotenv').config()
const express = require('express')
const app = express()
const http = require('http')
const path = require('path')
const server = http.createServer(app)

const EquationSolver = require('./EquationSolver')

const { Server } = require('socket.io')
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')))

const solver = new EquationSolver({ io });

io.on('connection', (socket) => {

    socket.on('join', (event) => {
        solver.join({event, socket})
    })

    socket.on("input_equation", (event) => {
        solver.getEquation({ socket, event });
    });

    
    
})

const PORT = process.env.PORT ?? 3000
server.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})