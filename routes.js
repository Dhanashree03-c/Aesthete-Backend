const express = require('express');
const multer = require('multer');
const path = require('path');
const ImageModel = require('./models');

const router = express.Router();

// Multer Storage
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

// Upload Image
router.post('/upload', upload.single('image'), (req, res) => {
    const { title, description } = req.body;
    const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;

    ImageModel.uploadImage(title, description, imageUrl, (err, result) => {
        if (err) {
            console.error('Error uploading image:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json({ message: 'Image uploaded successfully', imageUrl });
    });
});

// Retrieve Images
router.get('/images', (req, res) => {
    ImageModel.getImages((err, results) => {
        if (err) {
            console.error('Error fetching images:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
    });
});

module.exports = router;
