import mongoose from "mongoose";
import dotenv from "dotenv";
import movie from "./movie.js";
import dbConnection from "../src/config/db.js";

dotenv.config({
  path: "./.env",
});

const movies = [
  {
    title: "Harry Potter",
    genre: "Fantasy",
    year: 2001,
    rating: 7.6,
    director: "Chris Columbus",
    synopsis:
      "A young boy discovers that he is a wizard and is invited to attend Hogwarts School of Witchcraft and Wizardry, where he makes new friends, learns about magic, and uncovers secrets about his mysterious past.",
    cast: [
      "Daniel Radcliffe",
      "Emma Watson",
      "Rupert Grint",
      "Richard Harris",
      "Alan Rickman",
    ],
    poster:
      "https://media.harrypotterfanzone.com/philosophers-stone-the-magic-begins-600x0-c-default.jpg",
  },
  {
    title: "Toy Story 5",
    genre: "Animation",
    year: 2026,
    rating: 7.2,
    director: "Andrew Stanton",
    synopsis:
      "Woody, Buzz Lightyear, and their beloved toy friends return for a brand-new adventure as they face unexpected challenges, discover new toys, and learn that friendship and loyalty remain important no matter how much the world changes.",
    cast: [
      "Tom Hanks",
      "Tim Allen",
      "Annie Potts",
      "Joan Cusack",
      "Tony Hale",
    ],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8pbT-aRSdpfBnP3bdUNR8xiweOBdw_fR58mf7GZQpzGjFqOqwN24WWNk&s=10",
  },
  {
    title: "Project Hail Mary",
    genre: "Sci-Fi",
    year: 2026,
    rating: 7.7,
    director: "Phil Lord",
    synopsis:
      "A lone astronaut awakens on a dangerous mission far from Earth with no memory of how he got there. As he slowly recovers his memories, he must use science, courage, and unexpected alliances to solve a deadly threat that could determine the survival of humanity.",
    cast: [
      "Ryan Gosling",
      "Sandra Hüller",
      "Milana Vayntrub",
      "Lionel Boyce",
      "Ken Leung",
    ],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpnUPduv_JGn6UqsbZtB2XkNPqz2XaEMOkUETWComi8g&s",
  },
  {
    title: "Elio",
    genre: "Animation",
    year: 2025,
    rating: 9.0,
    director: "Adrian Molina",
    synopsis:
      "Elio is an imaginative young boy who is accidentally transported across the galaxy and mistaken for the ambassador of Earth. While meeting strange alien civilizations and making unexpected friends, he must find the courage to discover who he truly is and find his way home.",
    cast: [
      "Yonas Kibreab",
      "Zoe Saldaña",
      "Jameela Jamil",
      "Brad Garrett",
      "Remy Edgerly",
    ],
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGBGSPQ_DUiWfivjsYXXAIFlI8IeAkdfHWsBn6kyXUJZQ_zuOlHMjCf7o&s=10",
  },
];

await dbConnection();

await movie.deleteMany({});
await movie.insertMany(movies);

console.log("Movies inserted successfully");

process.exit();
export default movies;