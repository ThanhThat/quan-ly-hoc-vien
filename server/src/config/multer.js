import multer from "multer";
import path from "path";

// Cấu hình nơi lưu ảnh
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads"); // thư mục lưu hình ảnh
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()} - ${file.fieldname}${ext}`);
  },
});

// bộ lọc chỉ cho phép upload ảnh
const fileFilter = (req, file, cb) => {
  const allowTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .png, .jpg, .jpeg format allowed!"), false);
  }
};

// Tạo middleware upload
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // giới hạn 2MB
  fileFilter,
});

export default upload;
