import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    comment: {
      type: String,
      required: true,
      trim: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    _id: false,
  }
);

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  genre: {
  type: String,
  required: true,
  trim: true,
},

  year: {
    type: Number,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
  },

  avgRating: {
    type: Number,
    default: 0,
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
    type: [String],
    required: true,
  },

  poster: {
    type: String,
  },

  reviews: [reviewSchema],
});

const movie = mongoose.model("Movie", movieSchema, "movies");

export default movie;