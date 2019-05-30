const mysql= require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'avic2016',
    database: 'library'
});

connection.connect((err) => {
    if (err) {
        console.log('Error connection to DB!');
        return;
    }
    console.log('Connected!');
});

const employee = { name: 'Maria', location: 'Marito' };
connection.query('INSERT INTO employees SET ?', employee, (err, res) => {
    if(err) throw err;
    console.log('Last insert ID:', res.insertId);
});

connection.query('SELECT * FROM employees',(err,rows) => {
    if (err) throw err;
    console.log('Data received!');
    console.log(rows[0]);
    // rows.forEach( (row) => {
        // console.log(`${row.name} is in ${row.location} ${row.id}`);
    // });
});

connection.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});