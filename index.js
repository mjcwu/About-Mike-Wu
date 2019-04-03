const path = require('path')
const express = require('express')
const frontPageRouter = require('./routers/frontPage')

const app = express()

app.set("view engine", "ejs");

const port = process.env.PORT

const publicPath = path.join(__dirname, './views');
// app.use(express.static(publicPath));
app.use(express.static(path.join(__dirname, "public")));

app.use(frontPageRouter)

app.listen(port,()=>{
  console.log('Server is up on port '+ port)
})