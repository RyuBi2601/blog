# Belleza - Ứng dụng Blog Đơn giản

Belleza là một ứng dụng blog đơn giản được xây dựng với Node.js, Express và MySQL. Ứng dụng cho phép người dùng xem, tạo và đọc các bài viết blog.

![Belleza Blog](https://via.placeholder.com/800x400?text=Belleza+Blog)

## Tính năng

- **Xem danh sách bài viết**: Hiển thị tất cả bài viết theo thứ tự mới nhất
- **Xem chi tiết bài viết**: Xem nội dung đầy đủ của một bài viết
- **Tạo bài viết mới**: Thêm bài viết mới với tiêu đề và nội dung
- **Giao diện responsive**: Hoạt động tốt trên desktop, tablet và mobile
- **Thiết kế hiện đại**: Giao diện người dùng đẹp mắt với hiệu ứng và animation
- **Hỗ trợ Dark Mode**: Tự động chuyển đổi giữa chế độ sáng và tối theo cài đặt hệ thống

## Công nghệ sử dụng

- **Backend**:
  - Node.js
  - Express.js
  - MySQL (với mysql2)
  - dotenv (quản lý biến môi trường)

- **Frontend**:
  - HTML5
  - CSS3 (với CSS Variables)
  - JavaScript (Vanilla JS)
  - Responsive Design

## Cài đặt

### Yêu cầu

- Node.js (v12 trở lên)
- MySQL Server

### Các bước cài đặt

1. **Clone repository**

```bash
git clone https://github.com/your-username/belleza.git
cd belleza
```

2. **Cài đặt dependencies**

```bash
npm install
```

3. **Cấu hình môi trường**

Tạo file `.env` trong thư mục gốc với nội dung sau:

```
PORT=3000
DB_HOST=localhost
DB_NAME=blog_db
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
```

4. **Thiết lập cơ sở dữ liệu**

```bash
node setup_db.js
```

5. **Khởi động server**

```bash
npm start
```

6. **Truy cập ứng dụng**

Mở trình duyệt và truy cập: `http://localhost:3000`

## Cấu trúc dự án

```
belleza/
├── db.js                # Cấu hình kết nối database
├── package.json         # Thông tin dự án và dependencies
├── public/              # Static files
│   ├── css/
│   │   └── style.css    # CSS styles
│   └── js/
│       └── script.js    # JavaScript client-side
├── server.js            # Entry point của ứng dụng
├── setup_db.js          # Script thiết lập database
└── view/                # HTML templates
    ├── create.html      # Trang tạo bài viết
    ├── detail.html      # Trang chi tiết bài viết
    └── index.html       # Trang chủ
```

## API Endpoints

- `GET /api/posts`: Lấy tất cả bài viết
- `GET /api/posts/:id`: Lấy chi tiết bài viết theo ID
- `POST /api/posts`: Tạo bài viết mới

## Hướng dẫn sử dụng

1. **Xem danh sách bài viết**
   - Truy cập trang chủ để xem tất cả bài viết
   - Bài viết mới nhất sẽ hiển thị đầu tiên

2. **Xem chi tiết bài viết**
   - Click vào tiêu đề bài viết để xem chi tiết
   - Sử dụng nút "Back" để quay lại trang trước
   - Sử dụng nút "Về trang chủ" để trở về trang chủ

3. **Tạo bài viết mới**
   - Click vào nút "+ Thêm bài viết" trên trang chủ
   - Điền tiêu đề và nội dung bài viết
   - Click "Đăng bài" để lưu bài viết

## Phát triển

### Các tính năng có thể phát triển thêm

- Đăng nhập/Đăng ký người dùng
- Chỉnh sửa và xóa bài viết
- Thêm hình ảnh vào bài viết
- Tính năng bình luận
- Tìm kiếm bài viết
- Phân trang danh sách bài viết

### Đóng góp

1. Fork dự án
2. Tạo branch mới (`git checkout -b feature/amazing-feature`)
3. Commit thay đổi (`git commit -m 'Add some amazing feature'`)
4. Push lên branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## Giấy phép

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## Liên hệ

Tên của bạn - [email@example.com](mailto:email@example.com)

Link dự án: [https://github.com/your-username/belleza](https://github.com/your-username/belleza)