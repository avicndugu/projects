var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');
var data;

/* GET users listing. */
connection.query('SELECT * FROM employees',(err,rows) => {
    if (err) throw err;
    console.log('Data received!');
    data=rows;
    console.log(rows[0]);
});

router.get('/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(data);
});

module.exports = router;


// var express = require('express');
// var router = express.Router();
// var connection  = require('../lib/db');
 
 
/* GET home page. */
// router.get('/', function(req, res, next) {  
//     connection.query('SELECT * FROM customers ORDER BY id desc',function(err,rows){
//         if(err){
//          req.flash('error', err); 
//          console.log("connection made");
//          res.render('customers',{page_title:"Customers - Node.js",data:''});   
//         }else{
            
//             res.render('customers',{page_title:"Customers - Node.js",data:rows});
//         }
                            
//     });
// });

// // SHOW ADD USER FORM
// router.get('/add', function(req, res, next){    
//     // render to views/user/add.ejs
//     res.render('customers/add', {
//         title: 'Add New Customers',
//         name: '',
//         email: ''        
//     })
// })
