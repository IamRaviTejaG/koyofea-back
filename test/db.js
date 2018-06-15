let mysql = require("promise-mysql")
describe("# Access to DB", () => {
    it("should createConnection to mysql", () => {
        return mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: 'koyofeav1'
        }).then((con) => { con.end() })
    })
})