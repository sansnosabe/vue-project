require("dotenv").config();

const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

const listUsers = require("./controllers/listUsers");
const createUser = require("./controllers/createUser");
const editUser = require("./controllers/editUser");
const deleteUser = require("./controllers/deleteUser");

app.get("/", (req, res) => {
  res.send("Bienvenido al Server");
});
app.get("/api/users", listUsers);
app.post("/api/users", createUser);
app.put("/api/user", editUser);
app.delete("/api/user/:id", deleteUser);

app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.httpStatus || 500).send({
    status: "error",
    message: err.message,
  });
});

app.use((req, res) => {
  res.status(404).send({
    status: "error",
    message: "Ruta no encontrada",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
