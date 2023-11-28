const express = require("express");

const app = express();

app.use(express.json());

const movieControllers = require("./controllers/movieControllers");
const usersController = require("./controllers/usersController");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

app.get("/api/users", usersController.getUsers);
app.get("/api/users/:id", usersController.getUsersById);

app.post("/api/movies", movieControllers.postMovie);
app.post("/api/users", usersController.postUser);

module.exports = app;
