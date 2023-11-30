const express = require("express");

const app = express();

app.use(express.json());

const validateUser = require("../middlewares/validateUser");
const validateMovie = require("../middlewares/validateMovie");

const movieControllers = require("./controllers/movieControllers");
const usersController = require("./controllers/usersController");

app.post("/api/movies", validateMovie, movieControllers.postMovie);
app.post("/api/users", validateUser, usersController.postUser);

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

app.get("/api/users", usersController.getUsers);
app.get("/api/users/:id", usersController.getUsersById);

app.put("/api/movies/:id",validateMovie, movieControllers.updateMovie);
app.put("/api/users/:id",validateUser, usersController.updateUser);

app.delete("/api/movies/:id", movieControllers.deleteMovie);
app.delete("/api/users/:id", usersController.deleteUser)


module.exports = app;

