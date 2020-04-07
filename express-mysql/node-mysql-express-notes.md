https://code.tutsplus.com/tutorials/code-your-first-api-with-nodejs-and-express-connect-a-database--cms-31699
https://code.tutsplus.com/tutorials/code-your-first-api-with-nodejs-and-express-set-up-the-server--cms-31698

1. Create new database named api in the phpmyadmin. 
Don't set the collation

2. Click on database sql sub menu and run this sql query: This query creates a table with three columns.

CREATE TABLE `users` (
  `id`       int(11)     unsigned NOT NULL AUTO_INCREMENT,
  `name`     varchar(30) DEFAULT '',
  `email`    varchar(50) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

This is my response:
MySQL returned an empty result set (i.e. zero rows). (Query took 0.6536 seconds.)

3. Add the following three npm modules for this project to work:

npm install body-parser express mysql

4. create app.js file

Add the following code:
// Require packages and set the port
const express = require('express');
const port = 3002;
const app = express();
// Required to handle POST and PUT requests.
const bodyParser = require('body-parser');

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));


app.get('/', (request, response) => {
    response.send({message: 'Node.js and Express REST API'});
});


 Set Up Routes

5. Create a routes directory:

Move the get request to routes.js
const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });
}




Add this code to app.js
const routes = require('./routes/routes');


Add this route inside the router function:
app.get('/users', (req, res)=> {
    res.send(users)
})

Add this variable on route.js
const users = [{
        id: 1,
        name: "Richard Hendricks",
        email: "richard@piedpiper.com",
    },
    {
        id: 2,
        name: "Bertram Gilfoyle",
        email: "gilfoyle@piedpiper.com",
    },
];


Dealing with the database
9. Create a new directory called data and make a config.js file.
const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'localhost',
    user: 'root',
    password: 'avic2016',
    database: 'api',
};


// Create a MySQL pool
const pool = mysql.createPool(config);


// Export the pool
module.exports = pool;


In routes.js: use mysql instead of static data: 
// Load the MySQL pool connection
const pool = require('../data/config');

app.get('/users', (req, res)=> {
        // res.send(users)
        // Display all users
        pool.query('SELECT * FROM users', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    })


For individual item retreival:

app.get('/users/:id', (request, response) => {
        ...
    });
});


Post request endpoint handling:
app.post('/users', (request, response) => {
        pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
            if (error) throw error;
            response.status(201).send(`User added with ID: ${result.insertId}`);
        });
    });

Test it using cURL form test:
We'll run curl -d, followed by a query string containing all the key/value pairs and the request endpoint.
curl -d "name=Dinesh Chugtai&email=dinesh@piedpiper.com" http://localhost:3002/users


Updating a user:
// Update an existing user
app.put('/users/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('UPDATE users SET ? WHERE id = ?', [request.body, id], (error, result) => {
        if (error) throw error;
 
        response.send('User updated successfully.');
    });
});

For our test, we'll edit user 2 and update the email address from gilfoyle@piedpiper.com to bertram@piedpiper.com. We can use cURL again, with the [-X (--request)] flag, to explicitly specify that we're sending a PUT request through.

curl -X PUT -d "name=Bertram Gilfoyle" -d "email=bertram@piedpiper.com" http://localhost:3002/users/

Last but not least
Sending Requests Through the request Module
At the beginning of this article, we installed four dependencies, and one of them was the request module. Instead of using cURL requests, you could make a new file with all the data and send it through. I'll create a file called post.js that will create a new user via POST.


const request = require('request');
 
const json = {
    "name": "Dinesh Chugtai",
    "email": "dinesh@piedpiper.com",
};
 
request.post({
    url: 'http://localhost:3002/users',
    body: json,
    json: true,
}, function (error, response, body) {
    console.log(body);
});
We can call this using node post.js in a new terminal window while the server is running, and it will have the same effect as using cURL. If something is not working with cURL, the request module is useful as we can view the error, response, and body.