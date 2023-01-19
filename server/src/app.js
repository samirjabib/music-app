require("dotenv").config()
const express = require("express")
const cors = require("cors") //Cors nos permite evitar el error de origen cruzado entre navegadores

const { dbConnect } = require('./config/mongo')
const { router } = require('./router/router')

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

app.use("/api/v1", router);

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

dbConnect()