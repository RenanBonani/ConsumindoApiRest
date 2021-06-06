const Pool = require('pg').Pool;


const pool = new Pool({
    user: "postgres",
    password: "24882192@Bobo",
    host: "localhost",
    port: "5432",
    database:"cidade"
});

module.exports = pool;