// filename: mahasiswaModel.js

var mongoose = require('mongoose');

// setup schema
var mahasiswaSchema = mongoose.Schema({
    nim: {
        type: String,
        require: true,
    },
    nama: {
        type: String,
        require: true,
    },
    jurusan: String,
    semester: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// var mahasiswa model
var Mahasiswa = module.exports = mongoose.model('siswa', mahasiswaSchema);

module.exports.get = function (callback, limit) {
    Mahasiswa.find(callback).limit(limit);
}