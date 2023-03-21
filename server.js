const express = require("express")
const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 4000;
app.use(cors({origin: '*', methods: "GET, POST, PUT, DELETE, PATCH", credentials: true}))

//ROUTES
const searchRoutes = require('./routes/searchRoutes')

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//API ROUTES

app.use('/search', searchRoutes)


app.listen(PORT, () => {
  console.log("app listening on port 4000")
})