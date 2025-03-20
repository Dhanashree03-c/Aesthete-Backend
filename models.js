const db = require('./db');

const ImageModel = {
    uploadImage: (title, description, imageUrl, callback) => {
        const sql = 'INSERT INTO images (title, description, image_url) VALUES (?, ?, ?)';
        db.query(sql, [title, description, imageUrl], callback);
    },

    getImages: (callback) => {
        const sql = 'SELECT * FROM images ORDER BY uploaded_at DESC';
        db.query(sql, callback);
    }
};

module.exports = ImageModel;
