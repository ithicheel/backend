const syncSql = require('sync-sql')
const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
}
module.exports = async function (query) {
  const data = await syncSql.mysql(config, query)
  console.log(`MYSQL тэй холбогдлоо..`.cyan.underline.bold);
  return data
}
