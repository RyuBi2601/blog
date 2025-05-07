const mysql = require('mysql2/promise');
const dotenv = require('dotenv').config();

async function setupDatabase() {
  // Kết nối đến MySQL server (không chọn database)
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '', // Thay đổi thành mật khẩu MySQL của bạn
  });

  try {
    // Tạo database nếu chưa tồn tại
    await connection.query('CREATE DATABASE IF NOT EXISTS blog_db');
    console.log('Database created or already exists');

    // Chọn database
    await connection.query('USE blog_db');
    
    // Tạo bảng posts nếu chưa tồn tại
    await connection.query(`
      CREATE TABLE IF NOT EXISTS posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Table "posts" created or already exists');

    // Thêm dữ liệu mẫu nếu bảng trống
    const [rows] = await connection.query('SELECT COUNT(*) as count FROM posts');
    if (rows[0].count === 0) {
      await connection.query(`
        INSERT INTO posts (title, content) VALUES 
        ('Bài viết đầu tiên', 'Đây là nội dung của bài viết đầu tiên.'),
        ('Bài viết thứ hai', 'Đây là nội dung của bài viết thứ hai.')
      `);
      console.log('Sample data inserted');
    } else {
      console.log('Table already has data, skipping sample data insertion');
    }

    console.log('Database setup completed successfully');
  } catch (error) {
    console.error('Error setting up database:', error);
  } finally {
    await connection.end();
  }
}

setupDatabase();