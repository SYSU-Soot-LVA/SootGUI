var multer = require("multer");

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/files");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({
    storage: storage,
    limits: {
        fileSize: 100 * 1000000,
    },
});

module.exports = upload;