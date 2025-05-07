const mysql = require('mysql2');
const pool = mysql.createPool({
  host:  process.env.DB_HOST, // Thay đổi thành địa chỉ máy chủ MySQL của bạn (ví dụ: 'localhost')
  user: process.env.DB_USER, // Thay đổi thành tên người dùng MySQL của bạn 
  password: process.env.DB_PASSWORD, // Thay đổi thành mật khẩu MySQL của bạn
  database: process.env.DB_NAME, // Thay đổi thành tên cơ sở dữ liệu của bạn
});

module.exports = pool.promise();
