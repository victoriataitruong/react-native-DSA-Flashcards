/*What are singleton design patterns and how to implement them in JS?
The Singleton Design Pattern is a creational pattern that ensures a class has only one instance and provides a global point of access to that instance. This is useful for managing shared resources like configuration settings, logging, or database connections.
*/

//A Database Singleton
const mysql = require('mysql2'); // Import MySQL package

// Create a variable to store the database connection
let connection;

// Function to get the database connection
function getConnection() {
    if (!connection) { // If there is NO connection yet, create one
        connection = mysql.createConnection({
            host: 'localhost',    // Your database host
            user: 'root',         // Your database username
            password: 'password', // Your database password
            database: 'my_database' // Your database name
        });

        // Connect to the database
        connection.connect(err => {
            if (err) {
                console.error('Database connection failed:', err);
                return;
            }
            console.log('Connected to database.');
        });
    }

    return connection; // Always return the same connection
}

// Export the function so other files can use it
module.exports = getConnection;






// Example usage
const db = require('./database'); // Import the function
const conn = db(); // Get the database connection

// Run a simple query
conn.query('SELECT * FROM users', (err, results) => {
    if (err) {
        console.error('Query error:', err);
        return;
    }
    console.log('User data:', results);
});

/*
Explanation (Step by Step)
We declare a connection variable at the top.
When getConnection() is called:
If connection does not exist, we create a new one.
If connection already exists, we reuse it.
We export getConnection(), so other files can call it and always get the same connection.
Every time we require('./database'), we get the same database connection.
*/