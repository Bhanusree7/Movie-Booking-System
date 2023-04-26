// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();

// const db = mysql.createConnection({
//   host: 'http://localhost:3000/',
//   user: 'your_mysql_username',
//   password: 'your_mysql_password',
//   database: 'payment'
// });

// db.connect((err) => {
//   if (err) {
//     console.log('Error connecting to database:', err);
//   } else {
//     console.log('Connected to database!');
//   }
// });

// app.use(bodyParser.json());
// app.use(cors());

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   db.query(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`, (err, results) => {
//     if (err) {
//       console.log('Error querying database:', err);
//       res.status(500).send('Internal server error');
//     } else if (results.length === 0) {
//       res.status(401).send('Invalid username or password');
//     } else {
//       res.status(200).send('Login successful!');
//     }
//   });
// });

// app.listen(3001, () => {
//   console.log('Server listening on port 3001');
// });
