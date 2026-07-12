import express from "express";
import router from "./src/routes/movieRoute.js";

const app = express();

const PORT = 3001;


app.use(express.json());


app.use("/", router);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});