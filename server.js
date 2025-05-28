const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

app.use(express.static('public'));
app.post('/upload', upload.single('video'), (req, res) => {
  res.send('Upload successful!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running...');
});
