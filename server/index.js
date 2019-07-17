const express = require('express')

const app = express()

app.use(express.json())

const PORT = 5555

// Endpoints
const ctrl = require('./controller/controller')
app.get(`/api/getData`, ctrl.getData)


app.listen( PORT, () => console.log(`bingpot on port ${PORT}`))