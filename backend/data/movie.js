import mongoose from 'mongoose'

const movieSchema = mongoose.Schema({
     title: {
    type: String,
    required: true,
    trim: true,
  },

  genre: {
    type: String,
    required: true,
    enum: ["Sci-Fi", "Horror", "Animation", "Fantasy"],
  },

  year: {
    type: Number,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
  },

  director: {
    type: String,
    required: true,
  },

  synopsis: {
    type: String,
    required: true,
  },

  cast: {
    type: [String], // Array of cast members
    required: true,
  },
   poster: {
    type: String,
},
});
const movie = mongoose.model('Movie',movieSchema,'movies')

export default movie