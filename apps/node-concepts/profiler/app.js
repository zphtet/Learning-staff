const express = require('express')
const crypto = require('crypto')
const app = express()
const port = 8080

app.get('/newUser', (req, res) => {
    let username = req.query.username || '';
    const password = req.query.password || '';
  
    username = username.replace(/[^a-zA-Z0-9]/g, '');
  
    if (!username || !password || users[username]) {
      return res.sendStatus(400);
    }
  
    const salt = crypto.randomBytes(128).toString('base64');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');
  
    users[username] = { salt, hash };
  
    res.sendStatus(200);
  });


  app.get('/', (req, res) => {
       res.end("hello world")
  });

  app.get('/auth', (req, res) => {
    let username = req.query.username || '';
    const password = req.query.password || '';
  
    username = username.replace(/[^a-zA-Z0-9]/g, '');
  
    if (!username || !password || !users[username]) {
      return res.sendStatus(400);
    }
  
    crypto.pbkdf2(
      password,
      users[username].salt,
      10000,
      512,
      'sha512',
      (err, hash) => {
        if (users[username].hash.toString() === hash.toString()) {
          res.sendStatus(200);
        } else {
          res.sendStatus(401);
        }
      }
    );
  });
  
  
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})