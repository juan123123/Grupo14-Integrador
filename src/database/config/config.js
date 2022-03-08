const env = process.env
module.exports = {
  development: {
    username: "root",
    password: "200312345",
    database: "foodplace",
    host: "127.0.0.1",
    dialect: "mysql",
    port: 3306
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "franAdmin",
    password: "Adrian12234..",
    database: "foodplace",
    host: "45.79.201.214",
    dialect: "mysql"
  }
 
}
