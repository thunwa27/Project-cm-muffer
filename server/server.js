const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mysql = require("mysql");

require("dotenv").config();

const app = express();

//set middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "0f28itmvr",
  database: "cm_muffler",
});

app.get("/api/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Start server in port ${port}`));
