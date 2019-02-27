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

app.get('/user', function(req, res){
  connection.query(
    'SELECT * FROM `Users` ',
    function(err, results, fields) {
    res.send(results);
    }
  );
});

app.get('/user/:name', function(req, res){
  connection.query(
    "SELECT * FROM Users WHERE name='"+req.params.name+"'",
    function(err, results, fields) {
      console.log(results)
    res.send(results); 
    }
  );
});


app.post('/add',function(req, res){
  res.send('any');
  const user = {
    name:"Frenky",
    email:'frenky@gmail.com',
    password:'frenkypass',
    createdAt:new Date(),
    updatedAt:new Date()
  }
  console.log(user);
   let query = `INSERT INTO users SET ?`;
   connection.query(query, user, function(err, result){
    res.send(result);
    console.log(result);
   })  
})
app.post('/update',function(req, res){
  
   let query = ` UPDATE users SET name = ? WHERE email = ?`;
   connection.query(query, ['Lionel','frenky@gmail.com'], function(err, result){
    res.send(result);
    console.log(result);
   })  
})
app.post('/delete',function(req, res){
  let query = 'DELETE FROM contacts where id = ?'
  connection.query(
    query, [1], (err, result) => {
      if (err) throw err;
     }
  );
})
const PORT = 3000;

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on PORT ${PORT}`);
    });
  });
