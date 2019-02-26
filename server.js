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

app.get('/', function(req, res){
  connection.query(
    'SELECT * FROM `Users` ',
    function(err, results, fields) {
      res.send(results); // fields contains extra meta data about results, if available
    }
  );
});

const PORT = 3000;

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on PORT ${PORT}`);
    });
  });