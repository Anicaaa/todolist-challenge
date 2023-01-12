const express = require("express");
const app = express();
const port = 4000;
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(express.json);
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "todolist_challenge_anica",
  insecureAuth: true,
  port: 3306,
});

connection.connect();

connection.query(
  "SELECT * FROM todolist_challenge_anica.todo_contents",
  (err, rows, fields) => {
    if (err) throw err;

    console.log("The solution is: ", rows);
  }
);

connection.end();

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM todo_contents";
  connection.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const todoTitle = req.body.todoTitle;
  const todoContent = req.body.todoContent;
  const sqlInsert =
    "INSERT INTO todo_contents (todoTitle, todoContent) VALUE (?, ?)";
  connection.query(sqlInsert, [todoTitle, todoContent], (err, result) => {
    console.log(result);
  });
});

app.listen(port, () => {
  `Server on port ${port}`;
});
