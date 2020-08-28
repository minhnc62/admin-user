//File chứa thông tin kết nối tới database, chúng ta sẽ dùng Mongodb
// config/database.js
module.exports = {
    'url': process.env.MONGODB_URL || "mongodb://localhost:27017/node-auth"
}