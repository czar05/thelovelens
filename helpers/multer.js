import fs from 'fs';
import multer from 'multer';
const dir = './public'; // PATH TO UPLOAD FILE
if (!fs.existsSync(dir)) { // CREATE DIRECTORY IF NOT FOUND
  fs.mkdirSync(dir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

export const multerUpload = multer({ storage });
