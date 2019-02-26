const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/index');
const mysql = require('mysql2');

const app = express();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'rootpassword',
  database: 'sequelize_db'
});
connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
app.get('/', function(req, res){
  res.send('hello world');
});

const PORT = 6000;

db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on PORT ${PORT}`);
    });
  });