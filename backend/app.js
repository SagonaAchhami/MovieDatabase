import express from "express"
import movies from "./data/movie.js";
const app = express()

app.use(express.json())

const PORT = 3001

app.get("/movies",(req,res)=>{
    return res.json(movies)
})

app.post("/movies",(req,res)=>{
    const movie = req.body
    movies.push(movie)

    return res.status(201).json({"message":"Movie added successfully"})

})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)

    
})