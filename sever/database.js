let config = require("./config");
let mysql = require('mysql')
let connection = mysql.createConnection(config)
connection.connect();

const handleSql = (sql, data, fn) => {
    return connection.query(sql, data, (err, res) => {
        if (err) throw err
        fn(res)
    })
}
module.exports = handleSql