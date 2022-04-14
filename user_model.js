const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'jay',
    host: 'localhost',
    database: 'main_db',
    password: 'root',
    port: 5432,
});

function getUsers() {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * from users ORDER BY id ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

function createUser(body) {
    return new Promise(function(resolve, reject) {
        const {name, email} = body
        pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error,results ) => {
            if (error) {
                reject(error)
            }
            resolve (`A new user has been added: ${results.rows[0]} `)
        })
    })
}

function deleteUser(id) {
    return new Promise(function(resolve, reject) {
        
        pool.query('DELETE FROM users where id = $1', [id], (error, results) => {
            if(error) {
                reject(error)
            }
            resolve(`User deleted with ID: ${id}`)
        })
    })
}

function queryUser(name) {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM users WHERE name = $1', [name], (error, results) => {
            if (error) {
                reject.error
            }
            console.log(results)
            resolve(results)
        })
    })
}

module.exports = {
    getUsers,
    createUser,
    deleteUser
}