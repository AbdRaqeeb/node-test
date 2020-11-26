const express = require("express")
const cors = require("cors")
require("dotenv/config")
const error = require("./middleware/error")

const app = express()

app.use(express.json({extended: false}))
app.use(cors())

// Routes
app.use('/api/v1/valid', require("./routes/validation"))
app.use('/api/v1/remove', require("./routes/remove"))
app.use('/api/v1/magic', require("./routes/magic"))

app.get('/', (req, res) => {
    res.status(200).json({
        msg: " Welcome to NodeJS developed RESTFul APIs for Heimdall Technologies Junior Backend Developer Test By Ajao Abdur-Raqeeb"
    })
})

app.use(error)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})