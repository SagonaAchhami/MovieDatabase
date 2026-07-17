import mongoose from 'mongoose'
import movie from './movie.js'
import dotenv from 'dotenv'

dotenv.config({
  path:'./.env',
})
const movies = [
  {
    title: "Harry Potter",
    genre: "Fantasy",
    year: 2001,
    rating: 7.6,
    director: "Chris Columbus",
    synopsis: "Wizard discovers Hogwarts magic",
    cast: ["Daniel Radcliffe"],
  },
  {
    title: "Toy Story 5",
    genre: "Animation",
    year: 2026,
    rating: 7.2,
    director: "Andrew Stanton",
    synopsis: "Toys return adventure",
    cast: ["Tom Hanks"],
  },
  {
    title: "Project Hail Mary",
    genre: "Sci-Fi",
    year: 2026,
    rating: 7.7,
    director: "Phil Lord",
    synopsis: "Astronaut saves Earth",
    cast: ["Ryan Gosling"],
  },
  {
    title: "Elio",
    genre: "Animation",
    year: 2025,
    rating: 9.0,
    director: "Adrian Molina",
    synopsis: "Boy becomes ambassador",
    cast: ["Yonas Kibreab"],
  },
];

const connection = mongoose.connect(process.env.MONGODB_URL)
await dbConnection()
await movie.deleteMany({})
await movie.insertMany(movies)
export default movies;