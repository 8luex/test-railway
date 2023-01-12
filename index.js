const express = require("express")
const app = express()
app.use(express.json())
require("dotenv").config()
const PORT = process.env.PORT
app.get("/", (req, res) => {
    res.send("<h1>hey hi</h1>")
})
app.get("/products", (req, res) => {
    res.send("<h1>products</h1>")
})
app.listen(PORT, () => {
    console.log("server startd");
})