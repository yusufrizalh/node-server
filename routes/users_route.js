import express from "express";
import { v4 as uuidv4 } from "uuid";

const usersRouter = express.Router();

// inisialisasi variabel: var, let, const
// dummy data json
let users = []; // diawal masih kosong

// membuat route untuk method GET menampilkan seluruh data
usersRouter.get("/", (request, response) => {
  response.send(users);
});

// membuat route untuk method GET berdasarkan ID tertentu
usersRouter.get("/:id", (request, response) => {
  // mendeklarasikan variabel dengan nilai yg jelas
  // const abc = 100; // integer
  const { id } = request.params; // membaca id dari data json
  const getUserId = users.find((foundUser) => foundUser.id === id); // true
  // regular function
  // function(param1, param2) { }
  // arrow function
  // () =>
  response.send(getUserId);
});

// membuat route untuk method POST
usersRouter.post("/", (request, response) => {
  const newUser = request.body;
  users.push({ ...newUser, id: uuidv4() });
  response.send(`User with name: ${newUser.name} is added to database`);
});

// membuat route untuk method DELETE berdasarkan ID tertentu
usersRouter.delete("/:id", (request, response) => {
  const { id } = request.params;
  users = users.filter((deletedUser) => deletedUser.id != id);
  response.send(`User with ID ${id} is deleted`);
});

// membuat route untuk method PATCH / PUT berdasarkan ID tertentu
usersRouter.patch("/:id", (request, response) => {
  const { id } = request.params;
  const { name, email, age } = request.body;
  const userId = users.find((foundUser) => foundUser.id === id);

  if (name) userId.name = name;
  if (email) userId.email = email;
  if (age) userId.age = age;

  response.send(`User with ID ${id} is updated`);
});

export default usersRouter;
