require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/login",(req,res)=>{
  res.send("Uou are in Login page")
})

app.get("/chirag",(req,res)=>{
    res.send("Hii Chirag")
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})